import json

class ConfigSchema:
    # Frontend
    # Empty for now
    
    # Backend
    MODELS_FOLDER = 'models_folder'

def load_config():
    '''
    Loads the configuration file for the project
    '''
    
    # Setup
    with open('config/env_vars.json') as f:
        env_vars = json.load(f)
        project_path = env_vars['project_path']
        config = env_vars['config']

    with open(
        f'{project_path}/config/{config}',
        'r',
    ) as f:
        config = json.load(f)
        config['project_root_folder'] = project_path

    root_path = config['project_root_folder'] + '/'

    # Frontend
    # Empty for now

    # Backend
    for key in [
        ConfigSchema.MODELS_FOLDER,
    ]:
        if key in config.keys():
            config[key] = root_path + config[key]

    return config


config = load_config()
