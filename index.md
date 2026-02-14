---
layout: default
---

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
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
 </iframe>
</div>

I'd like to learn design patterns and organizational practices,

*End of resume - The rest is for fun*   

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

<!-- do i need a footer?-->
<div style="height: 50px;"></div>

