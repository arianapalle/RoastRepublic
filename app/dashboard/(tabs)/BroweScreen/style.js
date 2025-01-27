import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#FFF8EA",
        margin: 0,
    },
    Menutitle: {
        marginHorizontal: 20,
        marginTop: 20,
        fontSize: 30,
        fontWeight: 800,
        color: '#223D2D',
    },
    MenuPrice: {
        marginHorizontal: 20,
        marginVertical: 10,
        fontSize: 15,
        fontWeight: 600,
        color: '#3F5A4A',
    },
    Description: {
        marginHorizontal: 20,
        marginTop: 10,
        fontSize: 14,
        fontWeight: 400,
        fontStyle: "italic",
        color: '#3F5A4A',
    },
    sizeContainer: {
        margin: 20,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        borderColor: "#C8C7C4",
    },
    SecOne: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: 700,
        color: '#223D2D',
    },
    required: {
        fontSize: 11,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderRadius: 20,
        borderColor: '#4C6556',
        color: '#223D2D',
    },
    sizeSecTwo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    sizeOption: {
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 30,
        alignItems: 'center',
        height: 50,
        width: 105,
        backgroundColor: '#F2EEE5',
    },
    selectedOption: {
        backgroundColor: '#223D2D', 
        color: "#FFF8EA",
    },
    selectedText: {
        color: "#fff",
    },
    size: {
        fontSize: 15,
        fontWeight: 700,
        color: '#223D2D',
    },
    AddOn: {
        fontSize: 11,
        color: '#4C6556',
        marginTop: 3,
    },
    TempContainer: {
        marginHorizontal: 20,
        paddingHorizontal: 10,
    },


    





});

export default styles;
