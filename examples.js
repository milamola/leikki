ask("Mikä on nimesi?", vastaa)

function vastaa(nimi) {
  print("Hei, " + nimi)
  pelaa()
}

var luku = random(1,3)

function pelaa() {
  ask("Arvaa luku 1-3", arvaus)
}

function arvaus(a) {
  if (a == luku) 
    print("Oikein!")
  else
    ask("Arvaa uudelleen!", arvaus)
}
