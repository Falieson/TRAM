# CLI Configuration 

## Cool Subtitle

------

## Emoji's in commandline

Stop seeing commits starting with `:nut_and_bolt:` and instead see 🔩

### Install

[emojify](emojify) is a shell script, so put it somewhere and make sure it's
added to your `$PATH`.

If you're on OS X, emojify is on [Homebrew](http://brew.sh/):

```sh
$ brew install emojify
```

Otherwise you can just run:

```sh
$ sudo sh -c "curl https://raw.githubusercontent.com/mrowa44/emojify/master/emojify -o /usr/local/bin/emojify && chmod +x /usr/local/bin/emojify"
```

### Config

Run it through git log with something like:

```sh
$ git log --oneline --color | emojify | less -r
```

and go from this dull thing:

![before](https://raw.githubusercontent.com/mrowa44/emojify/master/img/before.png)

to this:

![after](https://raw.githubusercontent.com/mrowa44/emojify/master/img/after.png)
