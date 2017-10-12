"""
NBFloat: Jupyter Notebook Extension placing floating guide over the notebook
"""

from distutils.core import setup

setup(
    name='nbfloat',
    version='0.1',
    description='Extension for placing floating guide over notebook',
    author='Adam Rule',
    author_email='acrule@ucsd.edu',
    license='BSD-3-Clause',
    packages=['nbfloat'],
    package_dir={'nbfloat': 'nbfloat'},
    package_data={'nbfloat': ['static/*.js']}
)
