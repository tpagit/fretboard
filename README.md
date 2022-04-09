# fretboard
Fun project for learning music theory with python.

![](docs/example.png)

## Features:
1. Build any major scale

## Development

### Tech stack:
1. [Python 3.9](https://www.python.org/)
2. [Kivy](https://kivy.org/#home) for Desktop GUI. Keep sources for fun, but desktop development stopped.
3. [React](https://reactjs.org/) for Browser GUI
3. [FastAPI](https://fastapi.tiangolo.com) for REST API
4. [PyCharm](https://www.jetbrains.com/pycharm/) as IDE

### First steps
1. **Optional:** Setup `*.kv` auto-completion for PyCharm via [instruction](https://github.com/kivy/kivy/wiki/Setting-Up-Kivy-with-various-popular-IDE's#kv-lang-auto-completion-and-highlighting)
2. Call `make install` to prepare dev environment
3. Run 
   * Desktop app: `.venv/bin/python -m fretboard.app`
   * API app: `.venv/bin/python -m fretboard.api`