// ROUTES
import ScreenNames from "../ScreenNames";

import { styles } from "./styles";

// SCREENS
import { HomeScreen, ProfileScreen, QRScreen } from "../../screens";

// import { Icon, IconElement } from '@ui-kitten/components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';

// const HomeIcon = () => <Icon name='home-outline' style={[styles.iconStyle]}/>
// const QRIcon = () => <Icon name='home-outline' style={[styles.iconStyle]}/>
// const PersonIcon = () => <Icon name="person-outline" style={[styles.iconStyle]}/>

const HomeIcon   = () => <Icon name="home-outline" size={20} />
const QRIcon     = () => <Icon name="qr-code-outline" size={20} />
const PersonIcon = () => <Icon name="person-outline" size={20} />


interface TabRoute {
    route: string;
    label: string;
    icon: React.ComponentType<any>;
    component: React.ComponentType<any>; // Must be a valid React component
    activeIcon: string;
    inActiveIcon: string;
    headerShown: boolean;
}

const BottomTabRoutesData: TabRoute[] = [
    {
        // Home 
        route: 'Home', 
        label: 'Home', 
        icon: HomeIcon,
        component: HomeScreen, 
        activeIcon: '',
        inActiveIcon: '',
        headerShown: false,
    },
    {
        // QRScreen 
        route: 'QRScreen', 
        label: 'Scan', 
        icon: QRIcon,
        component: QRScreen, 
        activeIcon: '',
        inActiveIcon: '',
        headerShown: false,
    },
    {
        // Profile 
        route: 'Profile', 
        label: 'Profile', 
        icon: PersonIcon,
        component: ProfileScreen, 
        activeIcon: '',
        inActiveIcon: '',
        headerShown: false,
    },
    // {
    //     // insert new component 
    //     route: '', 
    //     label: '', 
    //     icon: Icon,
    //     component: ComponentScreen, 
    //     activeIcon: '',
    //     inActiveIcon: '',
    //     headerShown: false,
    // },
];

export default BottomTabRoutesData;
