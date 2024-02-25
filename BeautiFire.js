import { StyleSheet, Dimensions } from 'react-native';


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
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    },
    VBoxCented: {
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
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        elevation: 5,
    },
    Icon2: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    // Images
    Img: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Img2: {
        position: 'absolute',
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    // shadows
    S5: { elevation: 5 },
    S10: { elevation: 10 },
    // borders
    B5: { borderRadius: 5 },
    B10: { borderRadius: 10 },
    B15: { borderRadius: 15 },
    B20: { borderRadius: 20 },
    B25: { borderRadius: 25 },
    B30: { borderRadius: 30 },
    B35: { borderRadius: 35 },
    B40: { borderRadius: 40 },
    B45: { borderRadius: 45 },
    // buttons
    centedBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 50,
    },

    // headings
    h1: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    h2: {
        fontSize: 16,
    },
    h3: {
        fontSize: 12,
    },
    h4: {
        fontSize: 8,
    },
    h5: {
        fontSize: 5,
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
    noBG: { backgroundColor: 'transparent' },
    //   textColors
    blackFG: { color: 'black' },
    whiteFG: { color: 'white' },
    redFG: { color: 'red' },
    greenFG: { color: 'green' },
    blueFG: { color: 'blue' },
    yellowFG: { color: 'yellow' },
    orangeFG: { color: 'orange' },
    purpleFG: { color: 'purple' },
    pinkFG: { color: 'pink' },
    brownFG: { color: 'brown' },
    grayFG: { color: 'gray' },
    lightGrayFG: { color: 'lightgray' },
    darkGrayFG: { color: 'darkgray' },
    cyanFG: { color: 'cyan' },
    magentaFG: { color: 'magenta' },
    indigoFG: { color: 'indigo' },
    violetFG: { color: 'violet' },
    tealFG: { color: 'teal' },
    limeFG: { color: 'lime' },
    oliveFG: { color: 'olive' },
    primaryFG: { color: '#1CADFF' },
    noFG: { color: 'transparent' },
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

    M5: { margin: 5 },
    M10: { margin: 10 },
    M15: { margin: 15 },
    M20: { margin: 20 },
    M25: { margin: 25 },
    M30: { margin: 30 },
    M35: { margin: 35 },
    M40: { margin: 40 },
    M50: { margin: 50 },

    MH5: { marginHorizontal: 5 },
    MH10: { marginHorizontal: 10 },
    MH15: { marginHorizontal: 15 },
    MH20: { marginHorizontal: 20 },
    MH25: { marginHorizontal: 25 },
    MH30: { marginHorizontal: 30 },
    MH35: { marginHorizontal: 35 },
    MH40: { marginHorizontal: 40 },
    MH50: { marginHorizontal: 50 },

    MV5: { marginVertical: 5 },
    MV10: { marginVertical: 10 },
    MV15: { marginVertical: 15 },
    MV20: { marginVertical: 20 },
    MV25: { marginVertical: 25 },
    MV30: { marginVertical: 30 },
    MV35: { marginVertical: 35 },
    MV40: { marginVertical: 40 },
    MV50: { marginVertical: 50 },


    // margins
    PL5: { paddingLeft: 5 },
    PL10: { paddingLeft: 10 },
    PL20: { paddingLeft: 20 },
    PL30: { paddingLeft: 30 },
    PL40: { paddingLeft: 40 },
    PL50: { paddingLeft: 50 },

    PR5: { paddingRight: 5 },
    PR10: { paddingRight: 10 },
    PR20: { paddingRight: 20 },
    PR30: { paddingRight: 30 },
    PR40: { paddingRight: 40 },
    PR50: { paddingRight: 50 },

    PT5: { paddingTop: 5 },
    PT10: { paddingTop: 10 },
    PT20: { paddingTop: 20 },
    PT30: { paddingTop: 30 },
    PT40: { paddingTop: 40 },
    PT50: { paddingTop: 50 },

    PB5: { paddingBottom: 5 },
    PB10: { paddingBottom: 10 },
    PB20: { paddingBottom: 20 },
    PB30: { paddingBottom: 30 },
    PB40: { paddingBottom: 40 },
    PB50: { paddingBottom: 50 },

    P5: { padding: 5 },
    P10: { padding: 10 },
    P15: { padding: 15 },
    P20: { padding: 20 },
    P25: { padding: 25 },
    P30: { padding: 30 },
    P35: { padding: 35 },
    P40: { padding: 40 },
    P50: { padding: 50 },

    PH5: { paddingHorizontal: 5 },
    PH10: { paddingHorizontal: 10 },
    PH15: { paddingHorizontal: 15 },
    PH20: { paddingHorizontal: 20 },
    PH25: { paddingHorizontal: 25 },
    PH30: { paddingHorizontal: 30 },
    PH35: { paddingHorizontal: 35 },
    PH40: { paddingHorizontal: 40 },
    PH50: { paddingHorizontal: 50 },

    PV5: { paddingVertical: 5 },
    PV10: { paddingVertical: 10 },
    PV15: { paddingVertical: 15 },
    PV20: { paddingVertical: 20 },
    PV25: { paddingVertical: 25 },
    PV30: { paddingVertical: 30 },
    PV35: { paddingVertical: 35 },
    PV40: { paddingVertical: 40 },
    PV50: { paddingVertical: 50 },
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

    // Border
    R5: { borderRadius: 5 },
    R10: { borderRadius: 10 },
    R15: { borderRadius: 15 },
    R20: { borderRadius: 20 },
    R30: { borderRadius: 30 },
    R40: { borderRadius: 40 },
    R50: { borderRadius: 50 },

    // some stuff
    lefty: {
        justifyContent: 'flex-start'
    },
    righty: {
        justifyContent: 'flex-end'
    },
    txtLeft: {
        textAlign: 'left'
    },
    txtRight: {
        textAlign: 'right'
    },
    txtCenter: {
        textAlign: 'center'
    },
    // font styles
    Roboto: {
        fontFamily: 'Roboto'
    },
    W600: {
        fontWeight: '600'
    },
    // alignment

});

export default Beauty;