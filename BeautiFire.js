import { StyleSheet } from 'react-native';

import { Dimensions } from 'react-native';

const WT = Dimensions.get('window').width
const HT = Dimensions.get('window').height

const Beauty = StyleSheet.create({
    // containers
    centedCont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    NonCentedCont: {
        flex: 1,
    },
    Centered: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    // Boxes
    HBox: {
        backgroundColor: 'transparent',
        flex: 1,
        flexDirection: "row",
    },
    VBox: {
        backgroundColor: 'transparent',
        flex: 1,
        flexDirection: "column",
    },
    HBoxCented: {
        backgroundColor: 'transparent',
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    },
    VBoxCented: {
        backgroundColor: 'transparent',
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
    },

    ListBox: {
        flex: 1,
        margin: 5,
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 5
    },
    // flexes
    row: { flexDirection: 'row' },
    rowRev: { flexDirection: 'row-reverse' },
    col: { flexDirection: 'column' },
    colRev: { flexDirection: 'column-reverse' },
    // Icons
    Icon: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        elevation: 5
    },
    // buttons

    // headings
    h1: {
        fontSize: 22,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: -5,
        // textShadowColor: '#000000',
        // textShadowOffset: { width: 1, height: 1 },
        // textShadowRadius: 0,
    },
    h2: {
        fontSize: 16,
        fontWeight: '100',
        backgroundColor: 'transparent',
        marginRight: 10
    },
    // paragraphs

    // colors
    blackBG: { backgroundColor: 'black' },
    whiteBG: { backgroundColor: 'white' },
    redBG: { backgroundColor: 'red' },
    greenBG: { backgroundColor: 'green' },
    blueBG: { backgroundColor: 'blue' },
    yellowBG: { backgroundColor: 'yellow' },
    orangeBG: { backgroundColor: 'orange' },
    purpleBG: { backgroundColor: 'purple' },
    pinkBG: { backgroundColor: 'pink' },
    brownBG: { backgroundColor: 'brown' },
    grayBG: { backgroundColor: 'gray' },
    lightGrayBG: { backgroundColor: 'lightgray' },
    darkGrayBG: { backgroundColor: 'darkgray' },
    cyanBG: { backgroundColor: 'cyan' },
    magentaBG: { backgroundColor: 'magenta' },
    indigoBG: { backgroundColor: 'indigo' },
    violetBG: { backgroundColor: 'violet' },
    tealBG: { backgroundColor: 'teal' },
    limeBG: { backgroundColor: 'lime' },
    oliveBG: { backgroundColor: 'olive' },
    primaryBG: { backgroundColor: '#1CADFF' },
    // margins
    ML5: { marginLeft: 5 },
    ML10: { marginLeft: 10 },
    ML20: { marginLeft: 20 },
    ML30: { marginLeft: 30 },
    ML40: { marginLeft: 40 },
    ML50: { marginLeft: 50 },
    MR5: { marginRight: 5 },
    MR10: { marginRight: 10 },
    MR20: { marginRight: 20 },
    MR30: { marginRight: 30 },
    MR40: { marginRight: 40 },
    MR50: { marginRight: 50 },
    MT5: { marginTop: 5 },
    MT10: { marginTop: 10 },
    MT20: { marginTop: 20 },
    MT30: { marginTop: 30 },
    MT40: { marginTop: 40 },
    MT50: { marginTop: 50 },
    MB5: { marginBottom: 5 },
    MB10: { marginBottom: 10 },
    MB20: { marginBottom: 20 },
    MB30: { marginBottom: 30 },
    MB40: { marginBottom: 40 },
    MB50: { marginBottom: 50 },
    // columns
    colF1: { flex: 1, flexDirection: 'column' },
    col10: { flex: 0.1, flexDirection: 'column' },
    col20: { flex: 0.2, flexDirection: 'column' },
    col30: { flex: 0.3, flexDirection: 'column' },
    col40: { flex: 0.4, flexDirection: 'column' },
    col50: { flex: 0.5, flexDirection: 'column' },
    col60: { flex: 0.6, flexDirection: 'column' },
    col70: { flex: 0.7, flexDirection: 'column' },
    col80: { flex: 0.8, flexDirection: 'column' },
    col90: { flex: 0.9, flexDirection: 'column' },
    // rows
    rowF1: { flex: 1, flexDirection: 'row' },
    row10: { flex: 0.1, flexDirection: 'row' },
    row20: { flex: 0.2, flexDirection: 'row' },
    row30: { flex: 0.3, flexDirection: 'row' },
    row40: { flex: 0.4, flexDirection: 'row' },
    row50: { flex: 0.5, flexDirection: 'row' },
    row60: { flex: 0.6, flexDirection: 'row' },
    row70: { flex: 0.7, flexDirection: 'row' },
    row80: { flex: 0.8, flexDirection: 'row' },
    row90: { flex: 0.9, flexDirection: 'row' },
});

export default Beauty;