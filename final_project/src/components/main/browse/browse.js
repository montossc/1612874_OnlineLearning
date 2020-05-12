import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Tile} from 'react-native-elements';
import PopularSkills from './popular-skills';
import PathSection from '../../global/mainComponents/pathSection/path-section';
import TopAuthor from './top-author';

const Browse = () => {
    const recommendTopics= [
        {
            name: 'CONFERENCES',
            background: {uri: 'https://images.pexels.com/photos/2305084/pexels-photo-2305084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
        },
        {
            name: `IT\nOPS`,
            background: {uri:'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
        },
        {
            name: `SOFTWARE\nDEVELOPMENT`,
            background: {uri:'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
        },
        {
            name: `INFORMATION\nAND\nCYBER SECURITY`,
            background: {uri:'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
        },
        {
            name: `DATA\nPROFESSIONAL`,
            background: {uri:'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
        },
        {
            name:`BUSINESS\nPROFESSIONAL`,
            background: {uri:'https://images.pexels.com/photos/3815729/pexels-photo-3815729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
        },
        {
            name: `CREATIVE\nPROFESSIONAL`,
            background: {uri:'https://images.pexels.com/photos/3435266/pexels-photo-3435266.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
        },
        {
            name: `MANUFACTURING\nAND\nDESIGN`,
            background:{uri:'https://images.pexels.com/photos/940019/pexels-photo-940019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
        }]
    const temp = [];
    const recommendPaths =[
        {
            name: 'Node.js Developer on Microsoft Azure',
            thumbnail: {uri:'https://www.logitech.com/content/dam/logitech/vc/en/rightsense/logos/microsoft.png.imgo.png'},
            courseNum: 3
        },
        {
            name: 'Salesforce Certified Administrator',
            thumbnail: {uri:'https://cdn.magenest.com/wp-content/uploads/2019/08/CRM-Salesforce-Logo-1200x840.png'},
            courseNum: 10
        },
        {
            name: 'Design Patterns in C#',
            thumbnail: {uri:'https://st.quantrimang.com/photos/image/2019/03/11/ly-do-hoc-csharp-1.jpg'},
            courseNum: 15
        },
        {
            name: 'Building Web Application with Blazor',
            thumbnail: {uri:'https://danpatrascu.com/wp-content/uploads/2019/05/blazorms-675x360.jpg'},
            courseNum: 6
        }
    ];
    const renderTopicView = () => {
        for (let i = 0; i < recommendTopics.length; i= i + 2) {
            let aboveTopic = recommendTopics[i];
            let belowTopic = recommendTopics[i+1];
            temp.push(
            <View>
                <Tile featured={true}
                      height={80}
                      width={150}
                      caption={aboveTopic.name}
                      imageSrc={aboveTopic.background}
                      containerStyle={{margin: 5}}
                      captionStyle={styles.tileCaption}
                />
                <Tile featured={true}
                      height={80}
                      width={150}
                      caption={belowTopic.name}
                      imageSrc={belowTopic.background}
                      containerStyle={{margin: 5}}
                      captionStyle={styles.tileCaption}
                />
            </View>);
        }
        return temp;
    }
    return (
        <ScrollView style={{padding: 10}} showsVerticalScrollIndicator={false}>
            <Tile featured={true}
                  height={100}
                  title={`NEW\nRELEASE`}
                  imageSrc={require('../../../../assets/image/new_release_background.jpg')}
                  containerStyle={styles.tileContainer}

            />
            <Tile featured={true}
                  height={100}
                  title={`RECOMMENDED\nFOR YOU`}
                  imageSrc={require('../../../../assets/image/recommend_background.jpg')}
                  containerStyle={styles.tileContainer}

            />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginBottom: 10}}>
            {
                renderTopicView()
            }
            </ScrollView>
            <PopularSkills/>
            <PathSection title={'Paths'} item={recommendPaths}/>
            <TopAuthor/>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    tileContainer:{
        marginBottom: 10,
    },
    tileCaption:{
        fontSize: 12,
        fontWeight: 'bold',
        color:'white',
        alignSelf: 'center',
        bottom: 20
    }
});
export default Browse;
