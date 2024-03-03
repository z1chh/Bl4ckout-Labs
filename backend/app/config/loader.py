import json

class ConfigSchema:
    # Backend
    MODELS_FOLDER = 'models_folder'
    
    # Database
    DATABASE = 'database'
    DATABASE_USERNAME = 'username'
    DATABASE_PASSWORD = 'password'
    DATABASE_HOST = 'host'
    DATABASE_PORT = 'port'
    DATABASE_DATABASE = 'database'

def load_config():
    '''
    Loads the configuration file for the project
    '''
    
    # Setup
    with open('config/env_vars.json') as f:
        env_vars = json.load(f)
        project_path = env_vars['project_path']
        config_name = env_vars['config']

    with open(
        f'{project_path}/config/{config_name}',
        'r',
    ) as f:
        config = json.load(f)
        config['project_root_folder'] = project_path

    root_path = config['project_root_folder'] + '/'

    # Backend
    for key in [
        ConfigSchema.MODELS_FOLDER,
    ]:
        if key in config.keys():
            config[key] = root_path + config[key]
    
    # Database
    for key in [
        ConfigSchema.DATABASE_USERNAME,
        ConfigSchema.DATABASE_PASSWORD,
    ]:
        if key in config[ConfigSchema.DATABASE].keys() and key in env_vars[ConfigSchema.DATABASE].keys():
            config[ConfigSchema.DATABASE][key] = env_vars[ConfigSchema.DATABASE][key]

    return config


def get_db_uri(config):
    # Extract db from config
    db_info = config[ConfigSchema.DATABASE]
    
    # Get db credentials
    db_username = db_info[ConfigSchema.DATABASE_USERNAME]
    db_password = db_info[ConfigSchema.DATABASE_PASSWORD]
    db_host = db_info[ConfigSchema.DATABASE_HOST]
    db_port = db_info[ConfigSchema.DATABASE_PORT]
    db_database = db_info[ConfigSchema.DATABASE_DATABASE]
    
    # Build db uri
    uri = f'postgresql://{db_username}:{db_password}@{db_host}:{db_port}/{db_database}'
    
    # Return db uri
    return uri


config = load_config()
db_uri = get_db_uri(config)
