# Timestamper

Insert a current Unix timestamp.

## Features

This extension generates a current Unix timestamp and inserts it into your editor at the current cursor position. You can run the command with the keyboard shortcut (ctrl + shift + t) or by opening the command palette (ctrl + shift + p) and running "Insert timestamp".

Note that this extension is for generating a static timestamp at the time of running the command, rather than inserting a timestamp that will be current at the time of your codes execution. This is useful in situations where you need to update the "modified" timestamp in a JSON file.

![Insert timestamp](images/timestamper.gif "Insert a Unix timestamp with a hotkey or from the command palette")