import React, { Component } from 'react'
import { View, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { Card, Text, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'

import colors from '../../colors'
import posts from '../../sample_posts'

import { pop_feed } from '../../actions/navigation'

class FeedExplore extends Component {
  render() {
    const { index } = this.props

    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.container}>
          <Text style={styles.exploreTitle}>{posts[index]["title"]}</Text>
            {
              posts[index]["explore_images"].map((image, index) => {
                console.log(image)
                return (
                  <View style={styles.imagesContainer} key={index} >
                    <Image
                     resizeMode='cover'
                     style={{flex:1, width: null, height: 300}}
                     source={{uri: image}} />
                  </View>
                )
              })
            }
          <Button
            icon={{name: 'backward', type: 'font-awesome', color:'white'}}
            backgroundColor={colors.secondary}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Back'
            onPress={() => this.props.dispatch(pop_feed())}/>
        </View>
      </ScrollView>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    padding: 20,
  },
  exploreTitle: {
    fontSize: 18,
    color: colors.primary1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },
  imagesContainer: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  name: {
    fontSize: 16,
    marginTop: 5
  },
}

const mapStateToProps = (state) => ({
  index: state.feed.index,
})

export default connect(mapStateToProps)(FeedExplore)
