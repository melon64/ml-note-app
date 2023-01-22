import cohere
co = cohere.Client('pQG4CTXENvjZqtXcY6dbUoXDF8rKxiTa43x7Qx2Y')
def spell_and_grammar_check(text):
    response = co.generate(
        model='xlarge',
        prompt='This is a spell check generator that capitalizes samples of text.\n\nSample: a new type OF aurora FounD on saturn resolves a planetary mystery\nCapitalized Text: A New Type Of Aurora Found On Saturn Resolves A Planetary Mystery\n--\nSample: online Shopping is ReSHaping Real-world Cities\nTitle Case: Online Shopping Is Reshaping Real-World Cities\n--\nSample: When you close 100 TAbs AFter Finding THE SoluTion To A BuG\nTitle Case: When You Close 100 Tabs After Finding The Solution To A Bug\n--\nSample: ' + '\nTitle Case:',
        max_tokens=1000,
        temperature=0.3,
        k=0,
        p=0.75,
        frequency_penalty=0,
        presence_penalty=0,
        stop_sequences=["--"],
        return_likelihoods='NONE')
    print('Prediction: {}'.format(response.generations[0].text))