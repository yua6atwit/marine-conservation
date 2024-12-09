import { Button } from "@/components/Button";
import { Collapsible } from "@/components/Collapsible";
import { Header } from "@/components/Header";
import { InputDebris } from "@/components/Input";
import { ScreenWrapper } from "@/components/ScreenWrapper";
import { Text } from "@/components/Text";
import { hp, wp } from "@/constants/helper";
import { useState } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";

var totalItems = 0
var totalWeight = 0

export default function catagories() {
    const [plastics, setPlastics] = useState(new Array(25).fill(0))
    const [tires, setTires] = useState(new Array(7).fill(0))
    const [cloths, setCloths] = useState(new Array(7).fill(0))
    const [papers, setPapers] = useState(new Array(8).fill(0))
    const [processedWoods, setProcessedWoods] = useState(new Array(7).fill(0))
    const [metals, setMetals] = useState(new Array(11).fill(0))
    const [glassCeramices, setGlassCeramices] = useState(new Array(8).fill(0))
    const [medicalWastes, setMedicalWastes] = useState(new Array(3).fill(0))

    // Handle the change for a specific index
    const handleOnChangeText = (text: string, index: number, arr: any[] ) => {
        // Copy the array to avoid direct mutation
        const updatedInputs = [...arr];

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

    const onSubmit = () => {

    }

    return(
        <ScreenWrapper>
            <Header title = 'Collected Trash' />
            <ScrollView
                showsVerticalScrollIndicator = {false}
                style = {{}}
            >
                {/*Catagories */}
                <Collapsible title='Plastic'>
                    <InputDebris 
                        label = 'Bags including pieces:'
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 0, plastics))}
                    />
                    <InputDebris 
                        label = 'Drink bottles:'
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 1, plastics))}
                    />
                    <InputDebris 
                        label = 'Bottle plugs:'
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 2, plastics))}
                    />
                    <InputDebris 
                        label = 'Plastic ring of plugs:'
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 3, plastics))}
                    />
                    <InputDebris 
                        label = 'Food containers and lids:'
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 4, plastics))}
                    />
                    <InputDebris 
                        label = 'Cosmetic products:'
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 5, plastics))}
                    />
                    <InputDebris 
                        label = 'Motor oil packaging (lubricants, oils, greases):'
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 6, plastics))}
                    />
                    <InputDebris 
                        label = 'Cutlery (glasses, cutlery, cups, straws):'
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 7, plastics))}
                    />
                    <InputDebris 
                        label = 'Lollipop sticks:'
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 8, plastics))}
                    />
                    <InputDebris 
                        label = 'Cigarette butts:'
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 9, plastics))}
                    />
                    <InputDebris 
                        label = 'Lighters and plastic cigarette boxes:'
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 10, plastics))}
                    />
                    <InputDebris 
                        label = 'Footwear and clothing (plastic parts):'
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 11, plastics))} 
                    />
                    <InputDebris 
                        label = 'Disposable gloves:'
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 12, plastics))} 
                    />
                    <InputDebris 
                        label = 'Fishing tool:'
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 13, plastics))} 
                    />
                    <InputDebris 
                        label = 'Pergolas:'
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 14, plastics))} 
                    />
                    <InputDebris 
                        label = 'Floats (for fishing tools):'
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 15, plastics))} 
                    />
                    <InputDebris 
                        label = 'Ropes:'
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 16, plastics))} 
                    />
                    <InputDebris 
                        label = 'Styrofoam boxes and pieces:'
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 17, plastics))} 
                    />
                    <InputDebris 
                        label = 'Ear sticks:'
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 18, plastics))} 
                    />
                    <InputDebris 
                        label = 'Construction material (bags, tarpaulins...):'
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 19, plastics))} 
                    />
                    <InputDebris 
                        label = 'Construction materials for insulation:'
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 20, plastics))} 
                    />
                    <InputDebris 
                        label = 'Diapers and sanitary pads:'
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 21, plastics))} 
                    />
                    <InputDebris 
                        label = 'Disposable medical masks:'
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 22, plastics))} 
                    />
                    <InputDebris 
                        label = 'Other plastic items:'
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 23, plastics))} 
                    />
                    <InputDebris 
                        label = 'Total weight of items (kg):'
                        onChangeText = {value => setPlastics(handleOnChangeText(value, 24, plastics))} 
                        borderBottom = {true}
                    />
                </Collapsible>
                <Collapsible title='Tire'>
                    <InputDebris 
                        label = 'Balls:'
                        onChangeText = {value => setTires(handleOnChangeText(value, 0, tires))}
                    />
                    <InputDebris 
                        label = 'Balloons:'
                        onChangeText = {value => setTires(handleOnChangeText(value, 1, tires))}
                    />
                    <InputDebris 
                        label = 'Kitchen rubber band:'
                        onChangeText = {value => setTires(handleOnChangeText(value, 2, tires))}
                    />
                    <InputDebris 
                        label = 'Tires and tubes:'
                        onChangeText = {value => setTires(handleOnChangeText(value, 3, tires))}
                    />
                    <InputDebris 
                        label = 'Boots:'
                        onChangeText = {value => setTires(handleOnChangeText(value, 4, tires))}
                    />
                    <InputDebris 
                        label = 'Other rubber items:'
                        onChangeText = {value => setTires(handleOnChangeText(value, 5, tires))}
                    />
                    <InputDebris 
                        label = 'Total weight of items (kg):'
                        onChangeText = {value => setTires(handleOnChangeText(value, 6, tires))}
                        borderBottom = {true}
                    />
                </Collapsible>
                <Collapsible title='Cloth'>
                    <InputDebris 
                        label = 'Clothes, hats, kitchen and bath towels:'
                        onChangeText = {value => setCloths(handleOnChangeText(value, 0, cloths))}
                    />
                    <InputDebris 
                        label = 'Shoes and sandals (for example made of leather or fabric) without a sole if it is made of another material:'
                        onChangeText = {value => setCloths(handleOnChangeText(value, 1, cloths))}
                    />
                    <InputDebris 
                        label = 'Carpets:'
                        onChangeText = {value => setCloths(handleOnChangeText(value, 2, cloths))}
                    />
                    <InputDebris 
                        label = 'Ropes and nets:'
                        onChangeText = {value => setCloths(handleOnChangeText(value, 3, cloths))}
                    />
                    <InputDebris 
                        label = 'Bags or sacks:'
                        onChangeText = {value => setCloths(handleOnChangeText(value, 4, cloths))}
                    />
                    <InputDebris 
                        label = 'Other clothing items:'
                        onChangeText = {value => setCloths(handleOnChangeText(value, 5, cloths))}
                    />
                    <InputDebris 
                        label = 'Total weight of items (kg):'
                        onChangeText = {value => setCloths(handleOnChangeText(value, 6, cloths))}
                        borderBottom = {true}
                    />
                </Collapsible>
                <Collapsible title='Paper'>
                    <InputDebris 
                        label = 'Paper bags:'
                        onChangeText = {value => setPapers(handleOnChangeText(value, 0, papers))}
                    />
                    <InputDebris 
                        label = 'Boxes and cartons and their pieces :'
                        onChangeText = {value => setPapers(handleOnChangeText(value, 1, papers))}
                    />
                    <InputDebris 
                        label = 'Carton of milk, juice, etc:'
                        onChangeText = {value => setPapers(handleOnChangeText(value, 2, papers))}
                    />
                    <InputDebris 
                        label = 'Cigarette packs:'
                        onChangeText = {value => setPapers(handleOnChangeText(value, 3, papers))}
                    />
                    <InputDebris 
                        label = 'Packaging for food, drinks and other foodstuffs:'
                        onChangeText = {value => setPapers(handleOnChangeText(value, 4, papers))}
                    />
                    <InputDebris 
                        label = 'Newspapers and magazines:'
                        onChangeText = {value => setPapers(handleOnChangeText(value, 5, papers))}
                    />
                    <InputDebris 
                        label = 'Other paper items:'
                        onChangeText = {value => setPapers(handleOnChangeText(value, 6, papers))}
                    />
                    <InputDebris 
                        label = 'Total weight of items (kg):'
                        onChangeText = {value => setPapers(handleOnChangeText(value, 7, papers))}
                        borderBottom = {true}
                    />
                </Collapsible>
                <Collapsible title='Processed Wood'>
                    <InputDebris 
                        label = 'Popsicle sticks, toothpicks, forks or another cutlery:'
                        onChangeText = {value => setProcessedWoods(handleOnChangeText(value, 0, processedWoods))}
                    />
                    <InputDebris 
                        label = 'Wooden boxes and/or pieces thereof:'
                        onChangeText = {value => setProcessedWoods(handleOnChangeText(value, 1, processedWoods))}
                    />
                    <InputDebris 
                        label = 'Cork:'
                        onChangeText = {value => setProcessedWoods(handleOnChangeText(value, 2, processedWoods))}
                    />
                    <InputDebris 
                        label = 'Palettes:'
                        onChangeText = {value => setProcessedWoods(handleOnChangeText(value, 3, processedWoods))}
                    />
                    <InputDebris 
                        label = 'Brushes and pencils:'
                        onChangeText = {value => setProcessedWoods(handleOnChangeText(value, 4, processedWoods))}
                    />
                    <InputDebris 
                        label = 'Other pieces of processed wood:'
                        onChangeText = {value => setProcessedWoods(handleOnChangeText(value, 5, processedWoods))}
                    />
                    <InputDebris 
                        label = 'Total weight of items (kg):'
                        onChangeText = {value => setProcessedWoods(handleOnChangeText(value, 6, processedWoods))}
                        borderBottom = {true}
                    />
                </Collapsible>
                <Collapsible title='Metal'>
                    <InputDebris 
                        label = 'Drink cans:'
                        onChangeText = {value => setMetals(handleOnChangeText(value, 0, metals))}
                    />
                    <InputDebris 
                        label = 'Canned food:'
                        onChangeText = {value => setMetals(handleOnChangeText(value, 1, metals))}
                    />
                    <InputDebris 
                        label = 'Cutlery and pots:'
                        onChangeText = {value => setMetals(handleOnChangeText(value, 2, metals))}
                    />
                    <InputDebris 
                        label = 'Aluminum foils and packages:'
                        onChangeText = {value => setMetals(handleOnChangeText(value, 3, metals))}
                    />
                    <InputDebris 
                        label = 'Bottle caps and lids:'
                        onChangeText = {value => setMetals(handleOnChangeText(value, 4, metals))}
                    />
                    <InputDebris 
                        label = 'Barrels, buckets, paint cans and other large containers:'
                        onChangeText = {value => setMetals(handleOnChangeText(value, 5, metals))}
                    />
                    <InputDebris 
                        label = 'Fishing tools (leads and hooks):'
                        onChangeText = {value => setMetals(handleOnChangeText(value, 6, metals))}
                    />
                    <InputDebris 
                        label = 'Construction material (wires, cables, metal nets, barbed wire...):'
                        onChangeText = {value => setMetals(handleOnChangeText(value, 7, metals))}
                    />
                    <InputDebris 
                        label = 'Household appliances and other electronic material (refrigerators, washing machines, batteries, etc.):'
                        onChangeText = {value => setMetals(handleOnChangeText(value, 8, metals))}
                    />
                    <InputDebris 
                        label = 'Other metal items:'
                        onChangeText = {value => setMetals(handleOnChangeText(value, 9, metals))}
                    />
                    <InputDebris 
                        label = 'Total weight of items (kg):'
                        onChangeText = {value => setMetals(handleOnChangeText(value, 10, metals))}
                        borderBottom = {true}
                    />
                </Collapsible>
                <Collapsible title='Glass and Ceramics'>
                    <InputDebris 
                        label = 'Glass bottles:'
                        onChangeText = {value => setGlassCeramices(handleOnChangeText(value, 0, glassCeramices))}
                    />
                    <InputDebris 
                        label = 'Food jars and glasses:'
                        onChangeText = {value => setGlassCeramices(handleOnChangeText(value, 1, glassCeramices))}
                    />
                    <InputDebris 
                        label = 'Ceramic plates and cups:'
                        onChangeText = {value => setGlassCeramices(handleOnChangeText(value, 2, glassCeramices))}
                    />
                    <InputDebris 
                        label = 'Light bulbs, neon bulbs:'
                        onChangeText = {value => setGlassCeramices(handleOnChangeText(value, 3, glassCeramices))}
                    />
                    <InputDebris 
                        label = 'Building material (bricks, cement, pipes):'
                        onChangeText = {value => setGlassCeramices(handleOnChangeText(value, 4, glassCeramices))}
                    />
                    <InputDebris 
                        label = 'Pieces of glass and ceramics:'
                        onChangeText = {value => setGlassCeramices(handleOnChangeText(value, 5, glassCeramices))}
                    />
                    <InputDebris 
                        label = 'Other items made of glass or ceramics:'
                        onChangeText = {value => setGlassCeramices(handleOnChangeText(value, 6, glassCeramices))}
                    />
                    <InputDebris 
                        label = 'Total weight of items (kg):'
                        onChangeText = {value => setGlassCeramices(handleOnChangeText(value, 7, glassCeramices))}
                        borderBottom = {true}
                    />
                </Collapsible>
                <Collapsible title='Medical Waste'>
                    <InputDebris 
                        label = 'Medical waste (needles, needle caps, infusion bottles, medical containers...):'
                        onChangeText = {value => setMedicalWastes(handleOnChangeText(value, 0, medicalWastes))}
                    />
                    <InputDebris 
                        label = 'Other medical items (patches, bandages...):'
                        onChangeText = {value => setMedicalWastes(handleOnChangeText(value, 1, medicalWastes))}
                    />
                    <InputDebris 
                        label = 'Total weight of items (kg):'
                        onChangeText = {value => setMedicalWastes(handleOnChangeText(value, 2, medicalWastes))}
                        borderBottom = {true}
                    />
                </Collapsible>
            </ScrollView>
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