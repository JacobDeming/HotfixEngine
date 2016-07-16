HelperMethods = {
  updateChampions(firebase,room,aether,material,chaos,order){
    var physicalAttack = 0;
    var physicalDefense = 0;
    var specialAttack = 0;
    var specialDefense = 0;
    var dexterity = 0;
    physicalAttack = Math.floor((chaos * material) + 10);
    physicalDefense = Math.floor(5 + material);
    specialAttack = Math.floor(2 + (2 * order));
    specialDefense = Math.floor(3 + chaos + aether);
    dexterity = Math.floor(((10 * aether) + order) / material);
    firebase.database().ref('/'+room+'/Players/Highwayman').update({
      physicalAttack:physicalAttack,
      physicalDefense:physicalDefense,
      specialAttack:specialDefense,
      specialDefense:specialDefense,
      dexterity:dexterity
    });
  }
}

module.exports = HelperMethods;