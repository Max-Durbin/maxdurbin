---
layout: default
---

<div style="height: 50px;"></div>

<script
    src="https://code.jquery.com/jquery-4.0.0.slim.min.js"
    integrity="sha256-8DGpv13HIm+5iDNWw1XqxgFB4mj+yOKFNb+tHBZOowc="
    crossorigin="anonymous">
</script>
<script src="/maxdurbin/renderTable.js"></script>

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

<div class="side-by-side">
 <div>
  <p>
      Working at Schaefer has been a great learning oppurtunity, but developement is limited and we are mostly focused on legacy maintance. At this point I'd like to find a team that can provide feedback and practice towards better organization and software architecture.
  </p>
 <a href="assets/MaxDurbinResume.pdf">Outdated_Resume pdf  --> </a>
 </div>
  <img src="{{ '/assets/images/MaxDurbinResume.png' | relative_url }}" alt="resume preview">
</div>

---

### Editing Our Intranet Diagnostics Site

Our local db team made our diagnostics site in 2011, it was rushed and eventually no would
touch it. This led to unintentional differences between tables and data going off screen.
I got to restructure our layout grid system to keep everything on screen and made common ui peices
into their own components which helped with organization.

<div class='flex-container'>
 <div id='just_a_table_ex1'></div>
 <div id='just_a_table_ex2'></div>
 <div id='just_a_table_ex3' style='--dc-default-blue: red;'></div>
</div>

<script>$('#just_a_table_ex1').append(render_table([{id: 99, cost: 9.99},{id: 100, cost: 5.50}]))</script>

<script>$('#just_a_table_ex2').append(render_table([{id: 99,  cost: "9.99"},
                                                    {id: 100, cost: "5.50"}, 
                                                    {id: 101, cost: "7.25"},
                                                    {id: 102, cost: "8.75"},
                                                    {id: 103, cost: "2.50"},
                                                    {id: 104, cost: "1.50"},
                                                    {id: 105, cost: "1.25"},
                                                    {id: 106, cost: "9.99"},
                                                    {id: 107, cost: "4.50"},
                                                    {id: 108, cost: "8.75"},
                                                    {id: 109, cost: "2.50"},
                                                    {id: 110, cost: "2.50"}], {className: "dc-table"}))</script>

<script>$('#just_a_table_ex3').append(render_table([{id: 99, cost: 9.99},{id: 100, cost: 5.50}], {className: "dc-table"}))</script>

---

### Read logs with vim! Grep a search term and sort results chronolgicaly.

*I can use this to see what a user did*  
`grep -r -h dlhaden | sort -k2,3 | cut --complement -b31-110 | tr -s ' ' | vim -R -`  

Grep lets you find relevant log entries wherever they might be, and sort can order those entries if there's a timestamp.
Vim syntax matching is straightfoward and it's great for removing columns if cut can't be used. 

---

### code block language python
```python
# hello I sure hope this looks like a python comment bc it's supposed to be!
my_python_string = 'python sure is fun!'
print(my_python_string)
```

---

### Make a github Page!!!

Github will host a static webpage for you, it's easy to generate using jekyll and markdown.  
The default github-markdown.css is already great, no theme required.

---

<!-- do i need a footer?-->
<div style="height: 50px;"></div>

