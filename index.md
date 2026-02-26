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

## **Software Support Engineer**
***Working at Schaefer Systems International (SSI) since 2022***

Hello, I'm max - A software support Engineer experienced with Python/SQL and problem solving.
Our team of two uses Python, SQL, JS, and CSS to write reports, scripts,
and maintain our system. We do some development on an internal diagnostics site 
and monitor critical services and processes to keep our automated warehouse running.

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

## Updating Our Diagnostics Site

Our site was rushed out one month in 2011 due to a deadline.
Working on it has become one of my favorite activities.
Restructuring the site enabled us to rapidly build pages from wire frame concepts. 

The greatest impact was from standardizing components and defining a grid layout based on Bootsrap.

<!-- we should be able to escape this section-->
{% include grid_components_example.html %}

<div style="height:25px;"></div>

The [bootstrap grid](https://getbootstrap.com/docs/5.3/layout/grid/) layout above was defined like this. 
Additional Row classes allow for full vertical control.

<!--needs css for syntax highlighting-->
```html
<div class='container' style='height:200px;'>
 <div class='row row-12'>
  <div id='table_ex0' class='col-4'></div>
  <div id='myplot' class='col-4'></div>
  <div class='col-4 subGrid'>
   <div class='row row-6'>
    <div id='table_ex2' class='col-8'></div>
    <div id='table_ex3' class='col-4' style='--dc-default-blue: firebrick;'></div>
   </div>
   <div class='row row-6'>
    <div id='table_ex4' class='col-12'></div>
   </div>
  </div>
 </div>
</div>
```
---
## Scripting

Because our local IT team is small we get exposed to a variety of problems, not just the ones we prefer.

* Find a variable in a Siemens PLC
* Analyse the cost of machine faults on production : statistics
* Automate a report pulling data from external legacy GUI : RPA + statistics

#### *A Recent Example*

In November I was asked to read log files containing byte messages 
we call telegrams to verify what a machine was being asked to do.
The telegrams are stored with other information reaching almost 400,000 lines per day.

Below our "case wheeler" machine is on the left.
In the picture the wheels are illuminated for a camera encased in a shroud directly above.
The feed is processed by a java service.

Now we can visualize and verify the messages being sent by our java service.
Red means break, 0 with a green underscore means the wheel will freely spin
and a numbered arrow asks the wheel to move some distance. 


<div class="container" style="aspect-ratio: 16/9;">
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

### Getting familiar with Linux.

I used to only use it when necessary but I'm becoming more of an enthusiast.
It started with grep, but I'm learning more basic utilities and fully converted to nvim now.

I like how transparent everything is on Linux, you can get **exactly** what you want.

`grep -r -h dlhaden | sort -k2,3 | cut --complement -b31-110 | tr -s ' ' | vim -R -`  

---

<!-- do i need a footer?-->
<div style="height: 50px;"></div>
