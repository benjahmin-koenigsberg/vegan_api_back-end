const quotes = [
    {
        "quote": "It takes nothing away from a human to be kind to an animal.",
        "author": "Joaquin Phoenix"
    },
    {
        "quote": "Veganism is not a sacrifice. It is a joy.",
        "author": "Gary L. Francione"
    },
    {
        "quote": "Only when we have become non-violent towards all life will we have learned to live well ourselves.",
        "author": "Cesar Chavez"
    },
    {
        "quote": "Animals are not products. Life doesn’t have a price.",
        "author": "Anonymous"
    },
    {
        "quote": "Every living creature has the right to live ethically.",
        "author": "Dirk Verbeuren"
    },
    {
        "quote": "All life deserves respect, dignity, and compassion. All life.",
        "author": "Anonymous"
    },
    {
        "quote": "It’s not hard to make decisions once you know what your values are.",
        "author": "Roy E. Disney"
    },
    {
        "quote": "May all that have life be delivered from suffering.",
        "author": "Buddha"
    },
    {
        "quote": "It is much easier to show compassion to animals. They are never wicked.",
        "author": "Haile Selassie"
    },
    {
        "quote": "I personally chose to go vegan because I educated myself on factory farming and cruelty to animals, and I suddenly realized that what was on my plate were living things, with feelings. And I just couldn’t disconnect myself from it any longer.",
        "author": "Ellen DeGeneres"
    },
    {
        "quote": "The greatness of a nation and its moral progress can be judged by the way its animals are treated.",
        "author": "Gandhi"
    },
    {
        "quote": "If you think that being vegan is difficult, imagine being a factory farmed animal.",
        "author": "Davegan Raza"
    },
    {
        "quote": "Until one has loved an animal, a part of one’s soul remains unawakened.",
        "author": "Anatole France"
    },
    {
        "quote": "I don’t see why someone should lose their life just so you can have a snack.",
        "author": "Russell Brand"
    },
    {
        "quote": "To get mud off your hands, use soap and water. To get blood off your hands, go vegan.",
        "author": "John Sakars"
    },
    {
        "quote": "Life is too short to make others shorter.",
        "author": "Chris Hannah (Propagandhi)"
    },
    {
        "quote": "Animals are here with us, not for us.",
        "author": "Anonymous"
    },
    {
        "quote": "The world is a dangerous place, not because of those who do evil, but because of those who look on and do nothing.",
        "author": "Albert Einstein"
    },
    {
        "quote": "I’m a vegan. I respect the environment and I do my best to spread the importance of such an issue.",
        "author": "Jared Leto"
    },
    {
        "quote": "The problem is that humans have victimized animals to such a degree that they are not even considered victims. They are not even considered at all. They are nothing; they don’t count; they don’t matter. They are commodities like TV sets and cell phones. We have actually turned animals into inanimate objects – sandwiches and shoes.",
        "author": "Gary Yourofsky"
    },
    {
        "quote": "Consider that animals, like us, have one life. It is their life, their only life, and as important to them as our own life is to us.",
        "author": "Jill Robinson"
    },
    {
        "quote": "Teaching a child not to step on a caterpillar is as valuable to the child as it is to the caterpillar.",
        "author": "Bradley Miller"
    },
    {
        "quote": "I choose not to make a graveyard of my body with the rotting corpses of dead animals.",
        "author": "George Bernard Shaw"
    },
    {
        "quote": "Regardless of anyone’s dietary motivations, the healthiest lifestyle is the one that’s most compassionate.",
        "author": "Steve-O"
    },
    {
        "quote": "Let food be thy medicine, and medicine be thy food.",
        "author": "Hippocrates"
    },
    {
        "quote": "The food you eat can either be the safest, most powerful form of medicine, or the slowest form of poison.",
        "author": "Ann Wigmore"
    },
    {
        "quote": "Intellectually, human beings and animals may be different, but it’s pretty obvious that animals have a rich emotional life and that they feel joy and pain. It’s easy to forget the connection between a hamburger and the cow it came from. But I forced myself to acknowledge the fact that every time I ate a hamburger, a cow had ceased to breathe.",
        "author": "Moby"
    },
    {
        "quote": "Whether you understand they evolved over billions of years or believe that a God made them all one afternoon, please be kind to animals.",
        "author": "Ricky Gervais"
    },
    {
        "quote": "I’ve always abhorred violence and am highly sensitized to it. I do not think it benefits society or indeed any individual to become tolerant of violence… I feel if I can accept the abuse of these innocent, sentient creatures and my role in it then I could easily become apathetic about…well, everything, and that is a scary thought.",
        "author": "Evanna Lynch"
    },
    {
        "quote": "Until he extends the circle of his compassion to all living things, man will not himself find peace.",
        "author": "Albert Schweitzer"
    },
    {
        "quote": "Medicine is not healthcare, food is healthcare. Medicine is sick care. Let’s all get that straight for a change.",
        "author": "Karen Pendergrass"
    },
    {
        "quote": "Eat food. Not too much. Mostly plants.",
        "author": "Michael Pollan"
    },
    {
        "quote": "Protecting the weak is the first step to enlightenment and being truly civilized.",
        "author": "Gary Yourofsky"
    },
    {
        "quote": "Eat your medicine.",
        "author": "Anonymous"
    },
    {
        "quote": "A healthy outside starts from the inside.",
        "author": "Robert Urich"
    },
    {
        "quote": "Killing and eating animals is a betrayal of our own core humanity…killing an innocent goes against our nature.",
        "author": "Evanna Lynch"
    },
    {
        "quote": "You cannot get through a single day without having an impact on the world around you. What you do makes a difference, and you have to decide what kind of difference you want to make.",
        "author": "Jane Goodall"
    },
    {
        "quote": "We are all animals of this planet. We are all creatures. And nonhuman animals experience pain sensations just like we do. They too are strong, intelligent, industrious, mobile, and evolutional. They too are capable of growth and adaptation. Like us, firsthand foremost, they are earthlings. And like us, they are surviving. Like us, they also seek their own comfort rather than discomfort. And like us they express degrees of emotion. In short like us, they are alive.",
        "author": "Joaquin Phoenix"
    },
    {
        "quote": "Animals are near and dear to my heart, and I’ve devoted my life to trying to improve their lives.",
        "author": "Betty White"
    },
    {
        "quote": "How would you feel, if the day that you were born, somebody else had already planned the day of your execution?",
        "author": "Gary Yourofsky"
    },
    {
        "quote": "After all the information I gathered about the mistreatment of animals, I couldn’t continue to eat meat.",
        "author": "Liam Hemsworth"
    },
    {
        "quote": "I’m a vegan. I don’t want to torture anything. I guess it’s about trying to live a life where I’m not contributing to the cruelty of the world.",
        "author": "Jessica Chastain"
    },
    {
        "quote": "The average age of a meat-eater is 63. I am on the verge of 85 and still at work as hard as ever. I have lived quite long enough and am trying to die; but I simply cannot do it. A single beef-steak; would finish me; but I cannot bring myself to swallow it. I am oppressed with a dread of living forever. That is the only disadvantage of vegetarianism.",
        "author": "George Bernard Shaw"
    },
    {
        "quote": "Basically we should stop doing those things that are destructive to the environment, other creatures, and ourselves and figure out new ways of existing.",
        "author": "Moby"
    },
    {
        "quote": "If you look at veganism, and question how we do things, and how we should be living, veganism, to me, seems like the logical way.",
        "author": "Romesh Ranganathan"
    },
    {
        "quote": "When I became vegan I stopped training for myself and started training with a purpose greater than my own. Veganism for me is about mindfulness. I do this to liberate animals.",
        "author": "Tim Shieff"
    },
    {
        "quote": "All animals should live happily and safely.",
        "author": "Ariana Grande"
    },
    {
        "quote": "If it’s not good enough for your eyes, why is it good enough for your stomach?",
        "author": "Gary Yourofsky"
    },
    {
        "quote": "Our thinking about non-human animals is very confused, and people who have chosen to live a cruelty-free plant-based lifestyle are baffled as to why other people have not made the connection. Many of us live with companion animals such as dogs, cats, and rabbits. We share our homes with them, consider them members of the family and we grieve when they die. Yet we kill and eat other animals who, if you really think about it, are no different from the ones we love.",
        "author": "Benjamin Zephaniah"
    },
    {
        "quote": "Be the voice of those who can’t say …..’stop.’ Who can’t say ‘that hurts.’ Who can’t say ‘I’m so afraid to die.’ Be the voice of the animals!",
        "author": "Miley Cyrus"
    },
    {
        "quote": "Wearing cosmetics that were tested on animals makes you ugly on the inside.",
        "author": "Ricky Gervais"
    },
    {
        "quote": "The health reasons are staggering! Do it also to take yourself out of the cycle of killing and abuse to living things. Show some compassion, and act on it.",
        "author": "Ed Templeton"
    },
    {
        "quote": "My motto has always been ‘If you love animals, don’t eat them’ … The moment I began to understand what was going on with the treatment of animals, it led me more and more in the way of the path I am [on] now, which is a complete vegan.",
        "author": "Bryan Adams"
    },
    {
        "quote": "The beef industry has contributed to more American deaths than all the wars of this century, all natural disasters, and all auto-mobile accidents combined. If beef is your idea of “real food for real people” you’d better live real close to a real good hospital.",
        "author": "Neal D. Barnard"
    },
    {
        "quote": "I’ve found that a person does not need protein from meat to be a successful athlete. In fact, my best year of track competition was the first year I ate a vegan diet.",
        "author": "Carl Lewis"
    },
    {
        "quote": "No human influenced me to become vegan. The screaming, terrified, enslaved animals were the only influence needed.",
        "author": "Gary Yourofsky"
    },
    {
        "quote": "Farm animals are far more aware and intelligent than we ever imagined and, despite having been bred as domestic slaves, they are individual beings in their own right. As such, they deserve our respect. And our help. Who will plead for them if we are silent?",
        "author": "Jane Goodall"
    },
    {
        "quote": "What you eat every day is a far more powerful determinant of your health than your DNA or most of the nasty chemicals lurking in your environment.",
        "author": "T. Colin Campbell"
    },
    {
        "quote": "As someone who loves animals, when I hear about a process that involves animal cruelty, I no longer want to be associated with it. Aside from the animal cruelty aspect of the meat/dairy industries, there are many health benefits associated with turning vegan, much to many people’s surprise.",
        "author": "Lucy Watson"
    },
    {
        "quote": "The most ethical diet just so happens to be the most environmentally sound diet and just so happens to be the healthiest.",
        "author": "Dr. Michael Greger"
    },
    {
        "quote": "It’s not a requirement to eat animals, we just choose to do it, so it becomes a moral choice and one that is having a huge impact on the planet, using up resources and destroying the biosphere.",
        "author": "James Cameron"
    },
    {
        "quote": "There are viable (and usually better) alternatives to the use of animals for food, sport, clothing, & experimentation. I beg you to discontinue any actions that might cause or condone animal torture, abuse, or destruction.",
        "author": "Moby"
    },
    {
        "quote": "Becoming vegan has given me a greater purpose, something bigger than myself to fight for, and fight I will.",
        "author": "David Carter"
    },
    {
        "quote": "People feel poorly because they are nourished by foods you wouldn’t feed to your dog and cat. The rich western diet is full of fat, sugar, cholesterol, salt, animal protein — all the wrong foods for people.",
        "author": "Dr. John McDougall"
    },
    {
        "quote": "You know what’s more insane than slaughterhouses? Meat eaters. Walking around, acting like their lifestyle isn’t causing any harm.",
        "author": "Gary Yourofsky"
    },
    {
        "quote": "The worst sin toward our fellow creatures is not to hate them, but to be indifferent to them: that’s the essence of inhumanity.",
        "author": "George Bernard Shaw"
    },
    {
        "quote": "For as long as men massacre animals, they will kill each other. Indeed, he who sows the seed of murder and pain cannot reap joy and love.",
        "author": "Pythagoras"
    },
    {
        "quote": "I got into being vegan because I was simply looking to benefit from being more compassionate. I have since come to learn that it is an animal-based diet that is responsible for the overwhelming majority of cases of cancer, heart disease, diabetes, obesity, multiple sclerosis, and all kinds of other problems.",
        "author": "Steve-O"
    },
    {
        "quote": "I am a firm believer in eating a full plant-based, whole food diet that can expand your life length and make you an all-around happier person.",
        "author": "Ariana Grande"
    },
    {
        "quote": "I just didn’t want to be fat. I got tired of breathing hard. I got tired of my joints hurting. I just got tired of being lied to.",
        "author": "Waka Flocka Flame"
    },
    {
        "quote": "Everything in food works together to create health or disease. The more we think that a single chemical characterizes a whole food, the more we stray into idiocy.",
        "author": "T. Colin Campbell"
    },
    {
        "quote": "We need to realize that these are beings that suffer the same as we suffer. They want freedom the way we want freedom.",
        "author": "Russell Simmons"
    },
    {
        "quote": "Stop filtering your nutrients through somebody else’s body.",
        "author": "Gary Yourofsky"
    },
    {
        "quote": "Animal rights is a part of my everyday life. When you live by example, you create a certain level of awareness. Friends of mine – people I have never discussed animal rights or vegetarianism with – are adopting vegetarian habits because they see it.",
        "author": "Joaquin Phoenix"
    },
    {
        "quote": "Veganism changed me. It taught me to look past myself. To consider how my choices affect others. The animals, the people around me, and the planet we live on.",
        "author": "Kat Von D"
    },
    {
        "quote": "I hope someday everyone will care about all animals, not just the ‘cute and cuddly’ ones.",
        "author": "Joanne McArthur"
    },
    {
        "quote": "Cows scream louder than carrots.",
        "author": "Alan Watts"
    },
    {
        "quote": "Animals on factory farms all face pain and fear, just like the animals we share our homes with, yet are repeatedly abused in shocking ways.",
        "author": "Peter Dinklage"
    },
    {
        "quote": "It’s not about loving animals. It’s about fighting injustice. My whole goal is for humans to have as little contact as possible with animals.",
        "author": "Gary Yourofsky"
    },
    {
        "quote": "We know we cannot be kind to animals until we stop exploiting them — exploiting animals in the name of science, exploiting animals in the name of sport, exploiting animals in the name of fashion, and yes, exploiting animals in the name of food.",
        "author": "César Chávez"
    },
    {
        "quote": "I always say that eating a plant based diet is the secret weapon of enhanced athletic performance.",
        "author": "Rich Roll"
    },
    {
        "quote": "By eating meat we share the responsibility of climate change, the destruction of our forests, and the poisoning of our air and water. The simple act of becoming a vegetarian will make a difference in the health of our planet.",
        "author": "Thích Nhất Hạnh"
    },
    {
        "quote": "I hold that the more helpless a creature, the more entitled it is to protection by man from the cruelty of man",
        "author": "Mohandas Gandhi"
    },
    {
        "quote": "One should not kill a living being, nor cause it to be killed, nor should one incite another to kill. Do not injure any being, either strong or weak, in the world.",
        "author": "Buddha"
    },
    {
        "quote": "Every time you have a glass of cow milk, some calf is not.",
        "author": "Gary Yourofsky"
    },
    {
        "quote": "Every kilogram of beef requires 100,000 liters of water to produce. By comparison, a kilogram of wheat requires just 900 liters, and a kilogram of potatoes just 500 liters.",
        "author": "T. Colin Campbell"
    },
    {
        "quote": "Animals are not here for us to do as we please with. We are not their superiors, we are their equals. We are their family. Be kind to them.",
        "author": "Ricky Gervais"
    },
    {
        "quote": "Now I can look at you in peace; I don’t eat you any more.",
        "author": "Franz Kafka"
    },
    {
        "quote": "It is my view that the vegetarian manner of living, by its purely physical effect on the human temperament, would most beneficially influence the lot of mankind.",
        "author": "Albert Einstein"
    },
    {
        "quote": "I did not become a vegetarian for my health, I did it for the health of the chickens.",
        "author": "Isaac Bashevis Singer"
    },
    {
        "quote": "Think occasionally of the suffering of which you spare yourself the sight.",
        "author": "Albert Schweitzer"
    },
    {
        "quote": "What we must do is start viewing every cow, pig, chicken, monkey, rabbit, mouse, and pigeon as our family members.",
        "author": "Gary Yourofsky"
    },
    {
        "quote": "A man of my spiritual intensity does not eat corpses.",
        "author": "George Bernard Shaw"
    },
    {
        "quote": "If you choose to eat meat… you love PETS not ANIMALS.",
        "author": "Miley Cyrus"
    },
    {
        "quote": "I love animals more than I love most people. Not kidding.",
        "author": "Ariana Grande"
    },
    {
        "quote": "Being a vegan just helps me build up my self-esteem. I feel good about it every time I eat a meal.",
        "author": "Steve-O"
    },
    {
        "quote": "I made the choice to be vegan because I will not eat (or wear, or use) anything that could have an emotional response to its death or captivity. I can well imagine what that must feel like for our non-human friends – the fear, the terror, the pain – and I will not cause such suffering to a fellow living being.",
        "author": "Rai Aren"
    },
    {
        "quote": "You have just dined, and however scrupulously the slaughterhouse is concealed in the graceful distance of miles, there is complicity.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "quote": "We don’t need to eat anyone who would run, swim, or fly away if he could.",
        "author": "James Cromwell"
    },
    {
        "quote": "Thousands of people who say they ‘love’ animals sit down once or twice a day to enjoy the flesh of creatures who have been utterly deprived of everything that could make their lives worth living and who endured the awful suffering and the terror of the abattoirs.",
        "author": "Jane Goodall"
    },
    {
        "quote": "This may surprise you, because it surprised me when I found out, but the single biggest thing an individual can do to combat climate change is to stop eating animals.",
        "author": "James Cameron"
    },
    {
        "quote": "Clearly, animals know more than we think, and think a great deal more than we know.",
        "author": "Irene M. Pepperberg"
    },
    {
        "quote": "If you could see or feel the suffering, you wouldn’t think twice. Give back life. Don’t eat meat.",
        "author": "Kim Basinger"
    },
    {
        "quote": "Compassion is the awareness of a deep bond between yourself and all creatures. -Eckhart Tolle",
        "author": null
    },
    {
        "quote": "No member of the animal kingdom ever did a thing to me. It’s why I don’t eat red meat or white fish. Don’t give me no blue cheese. We’re all members of the animal kingdom. Leave your brothers and sisters in the sea.",
        "author": "Prince"
    },
    {
        "quote": "Don’t wait for a better world. Start now to create a world of harmony and peace. It is up to you, and it always has been. You may even find the solution at the end of your fork.",
        "author": "Sharon Gannon"
    },
    {
        "quote": "I did not become a vegetarian for my health, I did it for the health of the chickens.",
        "author": "Isaac Bashevis Singer"
    },
    {
        "quote": "Think occasionally of the suffering of which you spare yourself the sight.",
        "author": "Albert Schweitzer"
    },
    {
        "quote": "What we must do is start viewing every cow, pig, chicken, monkey, rabbit, mouse, and pigeon as our family members.",
        "author": "Gary Yourofsky"
    },
    {
        "quote": "A man of my spiritual intensity does not eat corpses.",
        "author": "George Bernard Shaw"
    },
    {
        "quote": "If you choose to eat meat… you love PETS not ANIMALS.",
        "author": "Miley Cyrus"
    },
    {
        "quote": "I love animals more than I love most people. Not kidding.",
        "author": "Ariana Grande"
    },
    {
        "quote": "Being a vegan just helps me build up my self-esteem. I feel good about it every time I eat a meal.",
        "author": "Steve-O"
    },
    {
        "quote": "I made the choice to be vegan because I will not eat (or wear, or use) anything that could have an emotional response to its death or captivity. I can well imagine what that must feel like for our non-human friends – the fear, the terror, the pain – and I will not cause such suffering to a fellow living being.",
        "author": "Rai Aren"
    },
    {
        "quote": "You have just dined, and however scrupulously the slaughterhouse is concealed in the graceful distance of miles, there is complicity.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "quote": "We don’t need to eat anyone who would run, swim, or fly away if he could.",
        "author": "James Cromwell"
    },
    {
        "quote": "Thousands of people who say they ‘love’ animals sit down once or twice a day to enjoy the flesh of creatures who have been utterly deprived of everything that could make their lives worth living and who endured the awful suffering and the terror of the abattoirs.",
        "author": "Jane Goodall"
    },
    {
        "quote": "This may surprise you, because it surprised me when I found out, but the single biggest thing an individual can do to combat climate change is to stop eating animals.",
        "author": "James Cameron"
    },
    {
        "quote": "Clearly, animals know more than we think, and think a great deal more than we know.",
        "author": "Irene M. Pepperberg"
    },
    {
        "quote": "If you could see or feel the suffering, you wouldn’t think twice. Give back life. Don’t eat meat.",
        "author": "Kim Basinger"
    },
    {
        "quote": "Compassion is the awareness of a deep bond between yourself and all creatures. -Eckhart Tolle",
        "author": null
    },
    {
        "quote": "No member of the animal kingdom ever did a thing to me. It’s why I don’t eat red meat or white fish. Don’t give me no blue cheese. We’re all members of the animal kingdom. Leave your brothers and sisters in the sea.",
        "author": "Prince"
    },
    {
        "quote": "Don’t wait for a better world. Start now to create a world of harmony and peace. It is up to you, and it always has been. You may even find the solution at the end of your fork.",
        "author": "Sharon Gannon"
    }
]


console.log(quotes.length)

export default quotes
