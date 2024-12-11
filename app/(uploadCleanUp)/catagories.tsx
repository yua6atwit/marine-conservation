import { Button } from "@/components/Button";
import { Collapsible } from "@/components/Collapsible";
import { DebrisItem } from "@/components/database/Debris";
import { hp, wp } from "@/components/helper";
import { InputDebris } from "@/components/Input";
import { ScreenWrapper } from "@/components/ScreenWrapper";
import { Text } from "@/components/Text";
import { debrisCategories, debrisDescription } from "@/constants/debrisDescription";
import { useState } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";

var totalItems = 0
var totalWeight = 0

export default function catagories() {
    //Initialize array of items to 0
    //Last item contains total weight
    const [plastics, setPlastics] = useState(new Array(25).fill(0))
    const [tires, setTires] = useState(new Array(7).fill(0))
    const [cloths, setCloths] = useState(new Array(7).fill(0))
    const [papers, setPapers] = useState(new Array(8).fill(0))
    const [processedWoods, setProcessedWoods] = useState(new Array(7).fill(0))
    const [metals, setMetals] = useState(new Array(11).fill(0))
    const [glassCeramics, setGlassCeramics] = useState(new Array(8).fill(0))
    const [medicalWastes, setMedicalWastes] = useState(new Array(3).fill(0))

    // Handle the change for a specific index
    const handleOnChangeText = (text: string, index: number, arr: any[] ) => {
        // Copy the array to avoid direct mutation
        const updatedInputs = [...arr];

        //Error if user entered a letter
        if (Number.isNaN(Number(text))) {
            Alert.alert('Collected Trash', 'Please enter a number')
            text = '0'
        }
 
        //Subtract if current item is not zero
        if (updatedInputs[index] != 0 && totalItems > 0 && arr.length -1 != index) totalItems -= updatedInputs[index] 
        if (updatedInputs[index] != 0 && totalWeight > 0 && arr.length -1 == index) totalWeight -= updatedInputs[index] 
        
        // Update the specific index with the new text
        updatedInputs[index] = text

        //Add to total
        if (arr.length -1 == index) totalWeight += Number(text);
        if (arr.length -1 != index) totalItems += Number(text);

        // Update state with the modified array 
        return updatedInputs
    }

    //Formats data in to a list of debris Items
    const formatData = (arr : any[], category: string) => {
        const formatedData : DebrisItem[] = [];

        const getCategory = () => {
            //switch case for getting  gategory names
            switch (category) {
                case debrisCategories.plastic:
                    return 'plastic'; 
                case debrisCategories.tire:
                    return 'tires'
                case  debrisCategories.cloth:
                    return 'cloth'
                case  debrisCategories.paper:
                    return 'paper'
                case  debrisCategories.wood:
                    return 'processedWood'
                case  debrisCategories.metal:
                    return 'metal';
                case  debrisCategories.glassCeramic:
                    return 'glassCeramic';
                case  debrisCategories.mediacalWaste:
                    return "medicalWaste";
                default:
                    return 'plastic'; 
            }
        };
        
        //for loop to format the data as DebrisItem
        for (var index in arr) {
            const data : DebrisItem = {
                id: '100000' + index, // indexes: 0, 1, 2, 3
                category: category,
                description: debrisDescription[getCategory()][index],
                collected: arr[index],
            }
            formatedData.push(data)
        }
        return formatedData
    }

    const onSubmit = async () => {
        //TODO implement submit button
        //currently testing formatData
        const plasticList = formatData(plastics, debrisCategories.plastic)
        console.log(plasticList[2])
    }

    return(
        <ScreenWrapper>
            
            <ScrollView
                showsVerticalScrollIndicator = {false}
                style = {{paddingTop: 90}}
            >
                {/*Catagories */}
                <Collapsible title='Plastic'>
                    <InputDebris 
                        label = {debrisDescription.plastic[0] + ':'}
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 0, plastics))}
                    />
                    <InputDebris 
                        label = {debrisDescription.plastic[1] + ':'}
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 1, plastics))}
                    />
                    <InputDebris 
                        label = {debrisDescription.plastic[2] + ':'}
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 2, plastics))}
                    />
                    <InputDebris 
                        label = {debrisDescription.plastic[3] + ':'}
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 3, plastics))}
                    />
                    <InputDebris 
                        label = {debrisDescription.plastic[4] + ':'}
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 4, plastics))}
                    />
                    <InputDebris 
                        label = {debrisDescription.plastic[5] + ':'}
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 5, plastics))}
                    />
                    <InputDebris 
                        label = {debrisDescription.plastic[6] + ':'}
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 6, plastics))}
                    />
                    <InputDebris 
                        label = {debrisDescription.plastic[7] + ':'}
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 7, plastics))}
                    />
                    <InputDebris 
                        label = {debrisDescription.plastic[8] + ':'}
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 8, plastics))}
                    />
                    <InputDebris 
                        label = {debrisDescription.plastic[9] + ':'}
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 9, plastics))}
                    />
                    <InputDebris 
                        label = {debrisDescription.plastic[10] + ':'}
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 10, plastics))}
                    />
                    <InputDebris 
                        label = {debrisDescription.plastic[11] + ':'}
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 11, plastics))} 
                    />
                    <InputDebris 
                        label = {debrisDescription.plastic[12] + ':'}
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 12, plastics))} 
                    />
                    <InputDebris 
                        label = {debrisDescription.plastic[13] + ':'}
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 13, plastics))} 
                    />
                    <InputDebris 
                        label = {debrisDescription.plastic[14] + ':'}
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 14, plastics))} 
                    />
                    <InputDebris 
                        label = {debrisDescription.plastic[15] + ':'}
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 15, plastics))} 
                    />
                    <InputDebris 
                        label = {debrisDescription.plastic[16] + ':'}
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 16, plastics))} 
                    />
                    <InputDebris 
                        label = {debrisDescription.plastic[17] + ':'}
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 17, plastics))} 
                    />
                    <InputDebris 
                        label = {debrisDescription.plastic[18] + ':'}
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 18, plastics))} 
                    />
                    <InputDebris 
                        label = {debrisDescription.plastic[19] + ':'}
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 19, plastics))} 
                    />
                    <InputDebris 
                        label = {debrisDescription.plastic[20] + ':'}
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 20, plastics))} 
                    />
                    <InputDebris 
                        label = {debrisDescription.plastic[21] + ':'}
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 21, plastics))} 
                    />
                    <InputDebris 
                        label = {debrisDescription.plastic[22] + ':'}
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 22, plastics))} 
                    />
                    <InputDebris 
                        label = {debrisDescription.plastic[23] + ':'}
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 23, plastics))} 
                    />
                    <InputDebris 
                        label = {debrisDescription.plastic[24] + ':'}
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 24, plastics))} 
                        borderBottom = {true}
                    />
                </Collapsible>
                <Collapsible title='Tire'>
                    <InputDebris 
                        label = {debrisDescription.tires[0] + ':'}
                        onChangeText = {value => setTires(handleOnChangeText(value, 0, tires))}
                    />
                    <InputDebris 
                        label = {debrisDescription.tires[1] + ':'}
                        onChangeText = {value => setTires(handleOnChangeText(value, 1, tires))}
                    />
                    <InputDebris 
                        label = {debrisDescription.tires[2] + ':'}
                        onChangeText = {value => setTires(handleOnChangeText(value, 2, tires))}
                    />
                    <InputDebris 
                        label = {debrisDescription.tires[3] + ':'}
                        onChangeText = {value => setTires(handleOnChangeText(value, 3, tires))}
                    />
                    <InputDebris 
                        label = {debrisDescription.tires[4] + ':'}
                        onChangeText = {value => setTires(handleOnChangeText(value, 4, tires))}
                    />
                    <InputDebris 
                        label = {debrisDescription.tires[5] + ':'}
                        onChangeText = {value => setTires(handleOnChangeText(value, 5, tires))}
                    />
                    <InputDebris 
                        label = {debrisDescription.tires[6] + ':'}
                        onChangeText = {value => setTires(handleOnChangeText(value, 6, tires))}
                        borderBottom = {true}
                    />
                </Collapsible>
                <Collapsible title='Cloth'>
                    <InputDebris 
                        label = {debrisDescription.cloth[0] + ':'}
                        onChangeText = {value => setCloths(handleOnChangeText(value, 0, cloths))}
                    />
                    <InputDebris 
                        label = {debrisDescription.cloth[1] + ':'}
                        onChangeText = {value => setCloths(handleOnChangeText(value, 1, cloths))}
                    />
                    <InputDebris 
                        label = {debrisDescription.cloth[2] + ':'}
                        onChangeText = {value => setCloths(handleOnChangeText(value, 2, cloths))}
                    />
                    <InputDebris 
                        label = {debrisDescription.cloth[3] + ':'}
                        onChangeText = {value => setCloths(handleOnChangeText(value, 3, cloths))}
                    />
                    <InputDebris 
                        label = {debrisDescription.cloth[4] + ':'}
                        onChangeText = {value => setCloths(handleOnChangeText(value, 4, cloths))}
                    />
                    <InputDebris 
                        label = {debrisDescription.cloth[5] + ':'}
                        onChangeText = {value => setCloths(handleOnChangeText(value, 5, cloths))}
                    />
                    <InputDebris 
                        label = {debrisDescription.cloth[6] + ':'}
                        onChangeText = {value => setCloths(handleOnChangeText(value, 6, cloths))}
                        borderBottom = {true}
                    />
                </Collapsible>
                <Collapsible title='Paper'>
                    <InputDebris 
                        label = {debrisDescription.paper[0] + ':'}
                        onChangeText = {value => setPapers(handleOnChangeText(value, 0, papers))}
                    />
                    <InputDebris 
                        label = {debrisDescription.paper[1] + ':'}
                        onChangeText = {value => setPapers(handleOnChangeText(value, 1, papers))}
                    />
                    <InputDebris 
                        label = {debrisDescription.paper[2] + ':'}
                        onChangeText = {value => setPapers(handleOnChangeText(value, 2, papers))}
                    />
                    <InputDebris 
                        label = {debrisDescription.paper[3] + ':'}
                        onChangeText = {value => setPapers(handleOnChangeText(value, 3, papers))}
                    />
                    <InputDebris 
                        label = {debrisDescription.paper[4] + ':'}
                        onChangeText = {value => setPapers(handleOnChangeText(value, 4, papers))}
                    />
                    <InputDebris 
                        label = {debrisDescription.paper[5] + ':'}
                        onChangeText = {value => setPapers(handleOnChangeText(value, 5, papers))}
                    />
                    <InputDebris 
                        label = {debrisDescription.paper[6] + ':'}
                        onChangeText = {value => setPapers(handleOnChangeText(value, 6, papers))}
                    />
                    <InputDebris 
                        label = {debrisDescription.paper[7] + ':'}
                        onChangeText = {value => setPapers(handleOnChangeText(value, 7, papers))}
                        borderBottom = {true}
                    />
                </Collapsible>
                <Collapsible title='Processed Wood'>
                    <InputDebris 
                        label = {debrisDescription.processedWood[0] + ':'}
                        onChangeText = {value => setProcessedWoods(handleOnChangeText(value, 0, processedWoods))}
                    />
                    <InputDebris 
                        label = {debrisDescription.processedWood[1] + ':'}
                        onChangeText = {value => setProcessedWoods(handleOnChangeText(value, 1, processedWoods))}
                    />
                    <InputDebris 
                        label = {debrisDescription.processedWood[2] + ':'}
                        onChangeText = {value => setProcessedWoods(handleOnChangeText(value, 2, processedWoods))}
                    />
                    <InputDebris 
                        label = {debrisDescription.processedWood[3] + ':'}
                        onChangeText = {value => setProcessedWoods(handleOnChangeText(value, 3, processedWoods))}
                    />
                    <InputDebris 
                        label = {debrisDescription.processedWood[4] + ':'}
                        onChangeText = {value => setProcessedWoods(handleOnChangeText(value, 4, processedWoods))}
                    />
                    <InputDebris 
                        label = {debrisDescription.processedWood[5] + ':'}
                        onChangeText = {value => setProcessedWoods(handleOnChangeText(value, 5, processedWoods))}
                    />
                    <InputDebris 
                        label = {debrisDescription.processedWood[6] + ':'}
                        onChangeText = {value => setProcessedWoods(handleOnChangeText(value, 6, processedWoods))}
                        borderBottom = {true}
                    />
                </Collapsible>
                <Collapsible title='Metal'>
                    <InputDebris 
                        label = {debrisDescription.metal[0] + ':'}
                        onChangeText = {value => setMetals(handleOnChangeText(value, 0, metals))}
                    />
                    <InputDebris 
                        label = {debrisDescription.metal[1] + ':'}
                        onChangeText = {value => setMetals(handleOnChangeText(value, 1, metals))}
                    />
                    <InputDebris 
                        label = {debrisDescription.metal[2] + ':'}
                        onChangeText = {value => setMetals(handleOnChangeText(value, 2, metals))}
                    />
                    <InputDebris 
                        label = {debrisDescription.metal[3] + ':'}
                        onChangeText = {value => setMetals(handleOnChangeText(value, 3, metals))}
                    />
                    <InputDebris 
                        label = {debrisDescription.metal[4] + ':'}
                        onChangeText = {value => setMetals(handleOnChangeText(value, 4, metals))}
                    />
                    <InputDebris 
                        label = {debrisDescription.metal[5] + ':'}
                        onChangeText = {value => setMetals(handleOnChangeText(value, 5, metals))}
                    />
                    <InputDebris 
                        label = {debrisDescription.metal[6] + ':'}
                        onChangeText = {value => setMetals(handleOnChangeText(value, 6, metals))}
                    />
                    <InputDebris 
                        label = {debrisDescription.metal[7] + ':'}
                        onChangeText = {value => setMetals(handleOnChangeText(value, 7, metals))}
                    />
                    <InputDebris 
                        label = {debrisDescription.metal[8] + ':'}
                        onChangeText = {value => setMetals(handleOnChangeText(value, 8, metals))}
                    />
                    <InputDebris 
                        label = {debrisDescription.metal[9] + ':'}
                        onChangeText = {value => setMetals(handleOnChangeText(value, 9, metals))}
                    />
                    <InputDebris 
                        label = {debrisDescription.metal[10] + ':'}
                        onChangeText = {value => setMetals(handleOnChangeText(value, 10, metals))}
                        borderBottom = {true}
                    />
                </Collapsible>
                <Collapsible title='Glass and Ceramics'>
                    <InputDebris 
                        label = {debrisDescription.glassCeramic[0] + ':'}
                        onChangeText = {value => setGlassCeramics(handleOnChangeText(value, 0, glassCeramics))}
                    />
                    <InputDebris 
                        label = {debrisDescription.glassCeramic[1] + ':'}
                        onChangeText = {value => setGlassCeramics(handleOnChangeText(value, 1, glassCeramics))}
                    />
                    <InputDebris 
                        label = {debrisDescription.glassCeramic[2] + ':'}
                        onChangeText = {value => setGlassCeramics(handleOnChangeText(value, 2, glassCeramics))}
                    />
                    <InputDebris 
                        label = {debrisDescription.glassCeramic[3] + ':'}
                        onChangeText = {value => setGlassCeramics(handleOnChangeText(value, 3, glassCeramics))}
                    />
                    <InputDebris 
                        label = {debrisDescription.glassCeramic[4] + ':'}
                        onChangeText = {value => setGlassCeramics(handleOnChangeText(value, 4, glassCeramics))}
                    />
                    <InputDebris 
                        label = {debrisDescription.glassCeramic[5] + ':'}
                        onChangeText = {value => setGlassCeramics(handleOnChangeText(value, 5, glassCeramics))}
                    />
                    <InputDebris 
                        label = {debrisDescription.glassCeramic[6] + ':'}
                        onChangeText = {value => setGlassCeramics(handleOnChangeText(value, 6, glassCeramics))}
                    />
                    <InputDebris 
                        label = {debrisDescription.glassCeramic[7] + ':'}
                        onChangeText = {value => setGlassCeramics(handleOnChangeText(value, 7, glassCeramics))}
                        borderBottom = {true}
                    />
                </Collapsible>
                <Collapsible title='Medical Waste'>
                    <InputDebris 
                        label = {debrisDescription.medicalWaste[0] + ':'}
                        onChangeText = {value => setMedicalWastes(handleOnChangeText(value, 0, medicalWastes))}
                    />
                    <InputDebris 
                        label = {debrisDescription.medicalWaste[1] + ':'}
                        onChangeText = {value => setMedicalWastes(handleOnChangeText(value, 1, medicalWastes))}
                    />
                    <InputDebris 
                        label = {debrisDescription.medicalWaste[2] + ':'}
                        onChangeText = {value => setMedicalWastes(handleOnChangeText(value, 2, medicalWastes))}
                        borderBottom = {true}
                    />
                </Collapsible>
            </ScrollView>

            {/*Footer */}
            <View style = {styles.footer}>
                <View style = {{flexDirection: 'row', gap: 10}}>
                    <Text type= 'heading4'>Total Number of items:</Text>
                    <Text type= 'heading4'>{totalItems}</Text>
                </View>
                <View style = {{flexDirection: 'row', gap: 10}}>
                    <Text type= 'heading4'>Total Weight of items:</Text>
                    <Text type= 'heading4'>{totalWeight}</Text>
                </View>
                <Button type='light' label= 'Upload' onPress={onSubmit}/>
            </View>
        </ScreenWrapper>
    )
}   

const styles = StyleSheet.create({
    footer: {
      paddingHorizontal: wp(2),
      paddingVertical: hp(1),
      borderTopWidth: 2,
      gap: 10,
      paddingBottom: hp(3)
    },
});