Page creation instructions: https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll

Install tools:

```
brew install chruby ruby-install
source /opt/homebrew/opt/chruby/share/chruby/chruby.sh
ruby-install ruby 3.4.1
echo "source $(brew --prefix)/opt/chruby/share/chruby/chruby.sh" >> ~/.zshrc
echo "source $(brew --prefix)/opt/chruby/share/chruby/auto.sh" >> ~/.zshrc
echo "chruby ruby-3.4.1" >> ~/.zshrc # run 'chruby' to see actual version
gem install jekyll
bundle install
```

Run locally:

`bundle exec jekyll serve`

When ready to pubish:

`bundle update github-pages`
