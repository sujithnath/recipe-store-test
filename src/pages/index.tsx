import React from 'react';
import Reciepes from '../containers/Recipes';
import { IRecipes } from '../containers/Recipes/types';
import { fetchRecipes } from '../service';

const Main = ({ data }: IRecipes) => <Reciepes data={data} />

export const getStaticProps = async () => {
  const result = await fetchRecipes();
  const { data } = result
  return {
    props: { data },
  }
}


export default Main;
