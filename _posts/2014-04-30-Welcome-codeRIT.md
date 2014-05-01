---
layout: post
title: "Welcome"
quote: codeRIT comes to life!
image: false
video: true
video_mp4: /media/2014-02-26-hello-cosette/StockInnovation.mp4
---



# codeRIT

<div class="message">
	codeRIT represents a coalition of students with a mission to represent the RIT hackathon community on a national level. It focuses its attention towards increasing its relationship with other collegiate technical communities, teaching software development and entrepreneurial skills to its members, and uniting a fragmented collection of groups amongst GCCIS as one RIT group
</div>

Video that was used to make this awesome site.
<iframe width="560" height="315" src="//www.youtube.com/embed/HlGcXcdwJqk" frameborder="0" allowfullscreen></iframe>

#### Menu

To add a menu item you just need to add the following code inside the variable `menu`:

```
  - title:	[title of the menu item]
    url:	[the url to follow]
```

#### Others

You'll find a lot of other variables inside the file, e.g.:

- the site `title`, `description`, `icon` and default `cover` image.
- text of the `copyright` message.
- the number of posts per page (`paginate`).
- the `permalink`'s structure (see [the docs](http://jekyllrb.com/docs/pagination/)).


### Default YAML tags

- `layout:`<i>`post, page`</i> `or `<i>`fullscreen`</i>: defines the layout of the page.
- `title: [string]`: title of the post.
- `quote: [string]`: a small description of the post to be shown above the title.
- `dark:`<i>`true`</i> `or `<i>`false`</i>: use black font (instead of white) for the header (default value is false).
- `image: [url] or `<i>`false`</i>: a cover image for the post (default value is _false_).
- `video:`<i>`true`</i> `or `<i>`false`</i>: add a cover video for the post (default value is _false_).
- `video_mp4: [url]`: the URL for the mp4 video.
- `video_webm: [url]`: the URL for the webm video.
- `video_ogv: [url]`: the URL for the ogv video.

