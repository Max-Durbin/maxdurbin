---
layout: default
---

<script
    src="https://code.jquery.com/jquery-4.0.0.slim.min.js"
    integrity="sha256-8DGpv13HIm+5iDNWw1XqxgFB4mj+yOKFNb+tHBZOowc="
    crossorigin="anonymous">
</script>
<script src="/maxdurbin/assets/js/renderTable.js"></script>
<script type="module" src="/maxdurbin/assets/js/obs_example.js"></script>

### **Software Support Engineer**
***Working at Schaefer Systems International (SSI) since 2022***

Our team of two uses Python, SQL, sh, JS, and CSS to write reports, scripts, and maintain our system.
We do some development on an internal diagnostics site but our primary responsiblity is to keep services running for our warehouse below.

<div class="video">
 <iframe width="560" 
     height="315" 
     src="https://www.youtube.com/embed/8ypcAtJOHbI?si=JMTbLQdDpypjjka2"
     title="YouTube video player"
     frameborder="0"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
     referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
 </iframe>
</div>

<div class="container" style="height:250px;">
 <div class="row row-12">
  <div class="col-7">
   <p>
      Working at Schaefer has been a great learning opportunity.
      At this point I'd like to find a team that can provide feedback and practice
      towards better organization and software architecture.
   </p>
   <a href="assets/MaxDurbinResume.pdf">Outdated_Resume pdf  --> </a>
  </div>
  <div class="col-1"></div>
  <div style="text-align: right;" class="col-4">
   <img src="{{ '/assets/images/MaxDurbinResume.png' | relative_url }}" alt="resume preview">
  </div>
</div>
</div>

---

### Editing Our Intranet Diagnostics Site

Our diagnostics site was rushed out one month in 2011 due to a deadline.
Long story short it's disorganized - but working on it has become
one of my favorite activities.

Currently we use a grid layout like Bootstraps to house our components.

<!-- we should be able to escape this section-->
{% include grid_components_example.html %}

<div style="height:25px;"></div>

The [bootstrap grid](https://getbootstrap.com/docs/5.3/layout/grid/) layout above was defined like this. 
Additional Row classes allow for full vertical control.

<!--needs css for syntax highlighting-->
```html
<div class='container' style='height:200px;'>
 <div class='row row-12'>
  <div id='t_ex0' class='col-4'></div>
  <div id='myplot' class='col-4'></div>
  <div class='col-4 subGrid'>
   <div class='row row-6'>
    <div id='t_ex2' class='col-8'></div>
    <div id='t_ex3' class='col-4' style='--dc-default-blue: firebrick;'></div>
   </div>
   <div class='row row-6'>
    <div id='t_ex4' class='col-12'></div>
   </div>
  </div>
 </div>
</div>
```
---
### Scripting

Our on-site IT team is small so we have to deal with problemns we're not experts in. Stuff like -

* Find a variable in a Siemens plc
* Analyse the cost of machine faults on production - statistics
* Automate a report pulling data from external legacy GUI - rpa

#### Example

In november I was asked to read log files containing byte messages and
translate them into images we could use to understand what our machine is doing.
A day of opperation will be less than 400,000 lines for this machine.

PLC documentation defined each byte in the byte string communications called 'telegrams'
between plc and our java management system.

Here's our machine on the left, the script shows what each wheel is supposed to do.
Red means break, 0 with a green underscore means the wheel will freely spin,
and a numbered arrow asks the wheel to move some distance. 


<div class="container" style="height: 45vh;">
 <div class="row row-12">
  <div class="col-3">
   <img style="height: 100%" src="{{'assets/images/cw_real.png' | relative_url}}" alt="text_cw_out">
  </div>
  <div class="col-9">
   <img style="height: 100%" src="{{'assets/images/Screenshot 2026-02-24 154250.png' | relative_url}}" alt="text_cw_out">
  </div>
 </div>
</div>


---

### Read logs with vim! Grep a search term and sort results chronologically.

*I can use this to see what a user did*  
`grep -r -h dlhaden | sort -k2,3 | cut --complement -b31-110 | tr -s ' ' | vim -R -`  

Grep lets you find relevant log entries wherever they might be, and sort can order those entries if there's a timestamp.
Vim syntax matching is straightforward and it's great for removing columns if cut can't be used. 

---

### code block language python
```python
# hello I sure hope this looks like a python comment bc it's supposed to be!
my_python_string = 'python sure is fun!'
print(my_python_string)
```

---


<!-- do i need a footer?-->
<div style="height: 50px;"></div>

