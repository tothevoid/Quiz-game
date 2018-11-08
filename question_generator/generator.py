import pandas as pd
import os
import io
import json
from pathlib2 import Path

names = ['20181024210700-category','20181024234751-question','20181101215418-answer']

template_dir = Path(__file__).resolve().parent
output_dir = Path(__file__).resolve().parent / '..' / 'server' / 'seeders'

def create_categories(values):
    categories = list()
    for idx,item in enumerate(values):
        category = {'id': idx+1, 'name':item, 'img':''}
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
    with open(template_dir/(file+'.template'),mode = 'r',encoding='utf-8') as old_file:
        data = old_file.read()
    new_data = data.replace('[json]', text)
    with open(output_dir/(file+'.js'), mode ='w', encoding='utf-8') as output:
        output.write(new_data)


df = pd.read_csv(template_dir/'questions.csv', ';', encoding='utf-8')
categories = dict()
for idx,item in enumerate(set(df.ix[:,0].values)):
    categories[item] = idx+1
create_categories(categories)
create_questions(df,categories)