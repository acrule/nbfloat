"""
nbfloat: Jupyter Notebook extension with floating guide
"""

import os
import json
import datetime

from notebook.utils import url_path_join
from notebook.base.handlers import IPythonHandler, path_regex

class NBFloatHandler(IPythonHandler):

    # manage connections to various sqlite databases
    db_manager_directory = {}

    # check if extension loaded by visiting http://localhost:8888/api/nbfloat
    def get(self, path=''):
        """
        Handle Get request
        """

        self.write("NBFloat is working")

    def post(self, path=''):
        """
        Handle Post request
        """

        self.finish(json.dumps({'time': datetime.now()}))

def _jupyter_server_extension_paths():
    """
    Jupyter server configuration
    returns dictionary with where to find server extension files
    """
    return [{
        "module": "nbfloat"
    }]

def _jupyter_nbextension_paths():
    """
    Jupyter nbextension configuration
    returns dictionary with where to find nbextension files
    """
    return [dict(
        section="notebook",
        # the path is relative to the `nbfloat` directory
        src="static",
        # directory in the `nbfloat/` namespace
        dest="nbfloat",
        # _also_ in the `nbfloat/` namespace
        require="nbfloat/main")]

def load_jupyter_server_extension(nb_app):
    """
    Load the server extension and set up routing to proper handler
    nb_app: (obj) Jupyter Notebook Application
    """

    nb_app.log.info('NBFloat Server extension loaded')
    web_app = nb_app.web_app
    host_pattern = '.*$'
    route_pattern = url_path_join(web_app.settings['base_url'],
                                    r"/api/nbfloat%s" % path_regex)
    web_app.add_handlers(host_pattern, [(route_pattern, NBFloatHandler)])
