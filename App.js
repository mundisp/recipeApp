import {FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {useState} from 'react';

import Header from './components/Header'
import Options from './components/Options'
import Recipes from './components/Recipes'
import CreateRecipe from './components/CreateRecipe';
import AddCategory from './components/AddCategory';

export default function App() {

  const menuOptions = [
    {text: 'See your recipes', key: 1},
    {text: 'Create new recipe', key: 2},
    {text: 'Add a new category', key: 3},
  ]


  const [recipes, setRecipes] = useState([
    {name: 'orange chicken', key:1},
    {name: 'cordon bleu', key:2},
    {name: 'au gratin potatoes', key:3}
    ]);

  const [showRecipes, setShowRecipes] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showAddCategory, setShowAddCategory] = useState(false);

  function handlePress(){
    setShowRecipes(true);    
  }

  function handleBackToMenu(){
    setShowRecipes(false);
    setShowCreate(false);
    setShowAddCategory(false);
  }

  function handleCreateRecipe(){
    setShowCreate(true);
  }

  function handleAddCategory(){

    setShowAddCategory(true);

  }

  return (
  <View style={styles.container}>
    <Header/>

    {/*Default menu*/}
    {!showRecipes && !showCreate && !showAddCategory &&(
    <View style={styles.list}>
      <FlatList
        data={menuOptions}
        renderItem={({item})=>(<Options item={item}
        handlePress={handlePress}
        handleCreateRecipe={handleCreateRecipe}
        handleAddCategory={handleAddCategory}
        key={item.key}/>)}/> 
    </View>
    )}

    {/*When clicking 'See your recipes' */}
    {showRecipes &&(
      <View>
      <FlatList
        data={recipes}
        renderItem={({item: recipe})=>(
          <Recipes recipe={recipe}/>
        )}
      />  

      <TouchableOpacity onPress={handleBackToMenu}>
        <Text style={styles.button}>Back to menu</Text>
      </TouchableOpacity>
      </View>
      )}

    {/*When clicking 'create new recipe' */}
    {showCreate &&(
    <View>
      <CreateRecipe/>
        <TouchableOpacity onPress={handleBackToMenu}>
            <Text style={styles.button}>Back to menu</Text>
        </TouchableOpacity>
     </View>
    )}

    {/*When clicking 'add a new category' */}
    {showAddCategory  &&(
    
    <View>
      <AddCategory/>
      <TouchableOpacity onPress={handleBackToMenu}>
            <Text style={styles.button}>Back to menu</Text>
      </TouchableOpacity>
    </View>
    )}


  </View>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 200
  },
  button: {
    padding: 20,
    backgroundColor: '#159d99',
    height: 80,
    borderStyle: 'dashed',
    borderRadius: 20,
    marginTop: 100,
    color: 'white',
    fontSize: 27,
    textAlign: 'center'
  
  }

});
