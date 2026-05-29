---
title: "Plato's Theory of Forms: An Analogy for Understanding Object Oriented Programming"
description: 'How ontological concepts of universals and particulars illustrate the usefulness of OOP'
pubDate: 'May 29 2026'
tags: ['coding', 'philosophy', 'computer science']
---

I will start by explaining what Theory of Forms is. Ontology is a branch of metaphysics that considers what things can be said to exist and why. What is the most basic nature of a thing?

There are two fundamental concepts developed by Plato that I will use as an analogy to show the intuition behind OOP.

|          | Universals | Particulars|
| -------- | ----------- | --------- |
|Definition| A shared essence of what a thing is; its 'whatness' or _quiddity_ | The concrete, individual thing; a specific  instance of a universal; its 'thisness' or _haecceity_ |
| ---------| -----------|-----------|
|Examples| Human, Concept of a Chair | Abe Lincoln, Specfic Chair |


Platonic Dualism

Plato argues that existence is divided into two realities:

    Material World: physical world we experience with particular things and actions (Abe Lincoln, chair in my house, standing up for someone, etc)
    World of Forms: abstract world of eternal, unchanging forms only accessible through human reason. Contains perfect forms for each universal ('humanness', 'chairness' 'courage', etc)

Bringing it together, Plato argues that we can use human logic to categorize physical things in our world (ex. my house) into universals (ex. buildings). He takes it a step further and says that both the physical thing itself and its abstract categorizaton exist. He thinks the form can exist independent of any partcular of that form.

Now to introduce object oriented programming. Imagine you are working on a project in Python where you want to keep track of information about princesses. There are many different individual princesses, like Belle or Repunzel, but they are all categorized as princesses. Does this sound familiar? :) The particualar would be a specific princess like Belle, and the universal form is princess. 

Each individual princess can have different attributes. Belle has brown hair and a yellow dress, whereas Repunzel has blonde hair and a purple dress. Furthermore, each princess can have different functions, or things that they do. Belle might say, "Bonjour, bonjour!". Repunzel instead says, "When will my life begin?".

If we were to capture this in code, we would use a _class_ as the universal, so in this case a princess. You can think of both the class in computer science and the universal in philosophy as a blueprint for what a thing is. Unlike in philosophy, we can specifically define this in code. The class attributes are the "unchanging universal laws" of the Form such as the gender and royalty status that apply to all princesses, while name and hair are the "accidental properties" that define the individual particular.

```python
class Princess:
    #define attributes shared across all princesses; what defines a princess?
    gender = "Female"
    royal = True

    def __init__(self, name, hair, dress, phrase):
        self.name = name
        self.hair = hair
        self.dress = dress
        self.phrase = phrase

    # instance method (behavior)
    def speak(self):
        return self.phrase 
```

We would use an _instance_ to create a particular. 

```python
p1 = Princess('Belle', 'Brown', 'Yellow', 'Bonjour, bonjour')
print(f"Name: {p1.name}, Hair: {p1.hair}, Gender: {p1.gender}")
print(p1.speak())
p2 = Princess('Repunzel', 'Blonde', 'Purple', 'When will my life begin?')
print(f"Name: {p2.name}, Hair: {p2.hair}, Gender: {p2.gender}")
print(p2.speak())
```

Output:

Name: Belle, Hair: Brown, Gender: Female
Bonjour, bonjour
Name: Repunzel, Hair: Blonde, Gender: Female
When will my life begin?