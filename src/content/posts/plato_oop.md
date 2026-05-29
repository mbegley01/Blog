---
title: "Plato's Theory of Forms: An Analogy for Understanding Object Oriented Programming"
description: 'How ontological concepts of universals and particulars illustrate the usefulness of OOP'
pubDate: 'May 29 2026'
tags: ['coding', 'philosophy', 'computer science']
---

**Introduction to Ontology**
Ontology is a branch of metaphysics that considers what things can be said to exist and why. It seeks to answer questions like:

    What is the most basic nature of a thing?
    What does it mean for something to exist?
    Do concepts exist, or only physical things?

A classic ontological debate that started from Plato is whether properties exist independently of the objects that possess them. Plato considered these 'properties' to be mapped to categories, which are abstractions of what an object _is_. To discuss this, I will introduce some vocabulary to distinguish between abstract categories and concrete individual things.

|          | Universals | Particulars|

|Definition| A shared essence of what a thing is; its 'whatness' or _quiddity_ | The concrete, individual thing; a specific  instance of a universal; its 'thisness' or _haecceity_ |

|Examples| Human, Concept of a Chair | Abe Lincoln, Specific Chair |


**Platonic Dualism**

Plato argues that existence is divided into two realities:

    **Material World**: physical world we experience with particular things and actions 
    (Abe Lincoln, chair in my house, standing up for someone, etc)
    **World of Forms**: abstract world of eternal, unchanging forms only accessible through human reason. 
    Contains perfect forms for each universal ('humanness', 'chairness' 'courage', etc)

Bringing it together, Plato argues that we can use human logic to categorize physical things in our world (ex. my house) into universals (ex. buildings) based on their properties and behavior. He takes it a step further and says that both the physical thing itself and its abstract categorizaton exist. He thinks the form can exist independent of any partcular of that form. This whole argument is called _Thoery of Forms_.

**Object Oriented Programming**

Now we will introduce object oriented programming through a comparison to this philosophical framework. Imagine you are working on a project in Python where you want to keep track of information about princesses. There are many different individual princesses, like Belle or Repunzel, but they are all categorized as princesses. The particualar would be a specific princess like Belle, and the universal form is princess. 

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

We would use an _instance_ of a class to create a particular. 

```python
p1 = Princess('Belle', 'Brown', 'Yellow', 'Bonjour, bonjour')
print(f"Name: {p1.name}, Hair: {p1.hair}, Gender: {p1.gender}")
print(p1.speak())
p2 = Princess('Repunzel', 'Blonde', 'Purple', 'When will my life begin?')
print(f"Name: {p2.name}, Hair: {p2.hair}, Gender: {p2.gender}")
print(p2.speak())
```

Output:

```
Name: Belle, Hair: Brown, Gender: Female
Bonjour, bonjour
Name: Repunzel, Hair: Blonde, Gender: Female
When will my life begin?
```

Similar to how in Platonic Dualism, the universal in the _World of Forms_ can exist without attachment to any particular in the physical world, the class can exist without any instance. However, instances come from a class. This made me think of a new philosophical observation: it seems that every particular must come from a universal form. All things must have some way to describe them (attribute or behavior) relative to another thing, nothing exists purely as an individual. A chair exists because the form 'chairness' exists. Thus the universals (classes) are independent but the particulars (instances) are dependent.