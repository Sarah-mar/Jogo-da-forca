import words
import random

def verify_vowel(letter, word):
     variations = ""
     a_var = ["á", "â", "ã", "à"]
     e_var = ["é", "ê"]
     i_var = "í"
     o_var = ["ó", "ô", "õ"]
     u_var =  ["ú", "û"]
     if letter == "a":
          for l in word:
               if l in a_var:
                    variations += l
     elif letter == "e":
          for l in word:
               if l in e_var:
                    variations += l
     elif letter == "i":
          for l in word:
               if l in i_var:
                    variations += l
     elif letter == "o":
          for l in word:
               if l in o_var:
                    variations += l
     elif letter == "u":
          for l in word:
               if l in u_var:
                    variations += l 
     return variations

print("Bem vindo ao Jogo da Forca! \n \n Modos de jogo disponíveis: ")
gamemodes = []
for key in words.all_themes.keys():
    gamemodes.append(key)

repeat = True
while repeat:
     for gamemode in gamemodes:
          print(gamemode)
     chosen_gamemode  = input("\n Escolha um tema: ")
     for gamemode in gamemodes:
          if chosen_gamemode.lower() == gamemode:
               chosen_gamemode = gamemode
               print("Tema escolhido:", chosen_gamemode)
               verification = input("Confirmar? (S/N) ")
               if verification.upper() == "S":
                    repeat = False
     if chosen_gamemode.lower() not in gamemodes:
          print ("\n Tema indisponível.")


chosen_word = random.choice(words.all_themes[chosen_gamemode])

guesses = []
wrong_guesses = []
for i in range(len(chosen_word)):
     if chosen_word[i] == ' ':
         guesses.append("  ")
     else:
          guesses.append("_")    
tries = 7
while tries != 0:
     print ("\n Vidas restantes:", tries) 
     if len(wrong_guesses)!= 0:           
        print("Chutes anteriores:", end="")
        for i in wrong_guesses:
            print(" " ,i, end="")
     print("\n", guesses)                
     guess = input("\n Digite uma letra: ").lower()
     if guess in ["a", "e", "i", "o", "u"]:
         guess += (verify_vowel(guess, chosen_word.lower()))
     matches = []
     for i in guess:
         if i in chosen_word.lower(): 
              matches.append(i)
     if len(matches) != 0:
         for l in matches:
               for i in range(len(chosen_word)):
                    if l == chosen_word.lower()[i]:
                         guesses[i] = l
     else:
          wrong_guesses += guess
          tries -= 1
     if "_" not in guesses:
        tries = 0

print("\n", guesses)
if tries == 0 and "_" in guesses:
    print ("Que pena, não foi dessa vez... A palavra era", chosen_word)
else:
    print("Parabéns, você arrasou! A palavra era", chosen_word)

 