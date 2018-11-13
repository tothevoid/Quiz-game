import pandas as pd
import os
import io
import json
import shutil
from pathlib2 import Path

names = ['20181024210700-category','20181024234751-question','20181101215418-answer']

root_dir = Path(__file__).resolve().parent
server_dir = Path(__file__).resolve().parent / '..' / 'server'

def create_categories(values):
    categories = list()
    images = dict()
    save_dir = server_dir/'images'/'categories'
    
    for filename in os.listdir(root_dir/'images'):
        parts = filename.split('.')
        if len(parts)!=2:
            Exception()
        images[parts[0]] = parts[1]
    
    if len(images)!=0 and not os.path.exists(save_dir):
        os.makedirs(save_dir)
   
    for idx,item in enumerate(values):
        correct_id = idx+1
        extension = images.get(item, None)
        new_name=''
        if extension is not None:
            new_name = str(correct_id)+'.'+extension
            old_name = str(item)+'.'+extension
            shutil.copy2(root_dir/'images'/old_name, save_dir/new_name)  
        category = {'id': correct_id, 'name':item, 'img':new_name}
        categories.append(category)
    file_replace(names[0], categories)

def create_questions(df, categories):
    answers = list()
    questions = list()
    for question_id,item in enumerate(df.values):
        question = {'id': question_id+1, 'text': item[1], 'category': categories[item[0]]}
        questions.append(question)
        for answer_id,answer in enumerate(item[2:]):    
            correct = 0
            if answer_id == 0:
                correct = 1
            answer = {'name':answer, 'correct':correct, 'question_id':question_id+1}
            answers.append(answer)
    file_replace(names[1], questions)
    file_replace(names[2], answers)

def file_replace(file, list_dict):
    text = json.dumps(list_dict, ensure_ascii=False, indent=2)
    with open(root_dir/(file+'.template'),mode = 'r',encoding='utf-8') as old_file:
        data = old_file.read()
    new_data = data.replace('[json]', text)
    with open(server_dir/'seeders'/(file+'.js'), mode ='w', encoding='utf-8') as output:
        output.write(new_data)


df = pd.read_csv(root_dir/'questions.csv', ';', encoding='utf-8')
categories = dict()
for idx,item in enumerate(set(df.ix[:,0].values)):
    categories[item] = idx+1
create_categories(categories)
create_questions(df,categories)