---
title: 'Sharing Visual Code Settings'
subtitle: 'Do you have to set up a new computer with a working dev environment under VS Code?'
date: '2018-01-27'
tags: ['VS Code', 'tips', 'tools', 'uses']
published: true
---

I know how it feels to be **unproductive** while you are adapting everything to your taste. Thanks to the extension ["Settings Sync"](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync), you can now straightforwardly automate this task.

## What does the Settings Sync extension?

This extension is **synchronized** with our **Github** account (it uses a private gist) and allows us to synchronize:

- Extensions
- Workspaces
- Keyboard shortcuts
- Snippets
- Icons

### Extracting the information

1. Run the command `Sync: Update / Upload Settings` on the computer you want to extract the information from.
2. It will ask for a Github token, so create a new one and paste the key.
3. In your new device, just run `Sync: Download Settings`

You can repeat the step 3 on many different computers