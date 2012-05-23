# Jade to AMD convert utils

This module lets you use Jade, and compiled Jade templates, in an AMD context.

It aims to provide:

  * method to return an AMD wrapped jade runtime.js
  * method to compile Jade templates to AMD wrapped functions
  * connect middleware to serve the complied templates for development
  * build tool to puts files in the right place for something like RequireJS to bundle

But without:

  * embedding Jade - should use the version you have chosen to use
  * mandating naming or directory layouts
  * feature creeping :)

