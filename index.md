---
layout: default
---

<script
    src="https://code.jquery.com/jquery-4.0.0.slim.min.js"
    integrity="sha256-8DGpv13HIm+5iDNWw1XqxgFB4mj+yOKFNb+tHBZOowc="
    crossorigin="anonymous">
</script>

<script data-goatcounter="https://maxdurbin.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>

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
   <a href="assets/MaxDurbinResume5.pdf">Resume pdf</a>
  </div>
  <div class="col-1"></div>
  <div style="text-align: right;" class="col-4">
   <img src="{{ '/assets/images/MaxDurbinResume.png' | relative_url }}" alt="resume preview">
  </div>
</div>
</div>

---

## Updating Our Diagnostics Site

Our internal diagnostics website was built prior to wide adoption of components.
I'm restructuring the site with components and Bootsrap grid layouts in mind.

<!-- we should be able to escape this section-->
{% include grid_components_example.html %}

<div style="height:25px;"></div>

The [bootstrap grid](https://getbootstrap.com/docs/5.3/layout/grid/) layout above was defined like this. 
Additional Row classes allow for full vertical and horizontal control.

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

Our team gets exposed to a variety of problems where scripting is beneficial
* Find a variable in a Siemens PLC
* Analyse the cost of machine faults on production : statistics
* Automate a report pulling data from external legacy GUI : RPA + statistics

### *Example.1 : Visual aid from logs*

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


### *Example.2 : Performance Monitoring Statistics* ([script](https://github.com/Max-Durbin/share/blob/main/perf_monitoring_weighted_average_stats.py))

We monitor performance for our users using records called assignments and recently we had week
with unusually low performance everywhere.

Here's an example snip of some **_assignments grouped by pounds_**. 
**_Assignments_** are measured as the **_goal seconds_** vs **_real seconds_** taken to complete.
You can see performance decrease as cases get heavier (pounds on the left), meaning the
physical weight of a case was not being taken into proper account.

You should be just as likely to complete a 5 second goal with 100% performance as a 60 second goal. Same for weight or any other factor.
It's the performance monitoring systems responsibility to accurately take into account harder work and give you proportionatly more time to complete a more difficult job.
If we can identify factors that always correspond to poor performance - they probably aren't being accounted for correctly. 

<div class="container" style="aspect-ratio: 16/8;">
 <div class="row row-10">
  <div class="col-1"></div>
  <div class="col-10">
   <img style="height: 100%" src="{{'assets/images/Screenshot 2026-04-24 185140.png' | relative_url}}" alt="text_cw_out">
  </div>
  <div class="col-1"></div>
 </div>
 <div class="row row-2">
  <div class="col-1"></div>
  <div class="col-10">
  <p>
Note - 'weight' here refers to total assignment time contribution.
  </p>
  </div>
  <div class="col-1"></div>
 </div>
</div>


I was able to understand this situation and write a script to interpret excell data to investigate factors that hurt performance.
We had multiple things like weight to look at. this helped us answere 'is x factor bad and did it notably increase during the period'

### *Example.3 : Sequence Mining*

This ones a bit more experimental but in general I would like a process that could tell me

    1. what should have just happened. (change + service)
    2. what normally happens next. (change + service)

It's good to know how to push things forward/back a step and what service is actually supposed to do it.
 
I wrote my own sequence mining algorithm with hierarchical handling.
It looks at a number of entities in our db that undergo the same process and records
changes that always happen in the same sequence.

One general pattern is when all children must do something -> parent does something -> all children do something else.

A CLI lets us step forward and back through a process, overwriting an SVG.
![process_result](assets/images/phases.gif)


---

### Getting familiar with Linux.

My practice with Linux comes from working on our server.
Mostly I'm viewing logs and restarting services. I enjoy learning about the
utilities on our server to work more efficiently.

Here I have a command that puts log lines in chronological order that might come from multiple rolling log files
from different directories. This could seem like overcomplicating a simple task, but putting everything in order and squishing out the spaces is very helpful.

`grep -r -h dlhaden | sort -k2,3 | cut --complement -b31-110 | tr -s ' ' | vim -R -`  


---

### Location Button Test


{% include button_test.html %}

---
<!-- do i need a footer?-->
<div style="height: 50px;"></div>
