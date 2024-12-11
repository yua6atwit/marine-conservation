import { getPosts } from '@/components/database/PostDB';
import { hp } from '@/components/helper';
import { PostItem } from '@/components/PostItem';
import { ScreenWrapper } from '@/components/ScreenWrapper';
import { useAuth } from '@/context/authContext';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

//Loading post limit
var limit = 0;

export default function Home() {
  const { user } = useAuth();
  const [posts, setPosts] = useState<any[]>()

  useEffect(() =>{
    getPostsList()
  },[])

  const getPostsList = async() => {
    //call the api here
    limit = limit + 10;

    //console.log('fetching posts:', limit)
    //gets the posts in the database
    let result = await getPosts();

    if (result.success){
      setPosts(result.data)
    }

  }

  return (
    <ScreenWrapper>

      {/* Shows the posts */}
      <FlatList
        data = {posts}
        showsVerticalScrollIndicator = {false}
        contentContainerStyle = {styles.listStyle}
        keyExtractor={item=> item.id.toString()}
        renderItem = { ({item}) => 
          <PostItem 
            item = {item}
            currentUser = {user}
          />
        }
      />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  listStyle: {

  },
});