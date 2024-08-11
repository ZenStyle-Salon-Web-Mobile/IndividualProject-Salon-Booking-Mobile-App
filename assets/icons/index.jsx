import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from "./Home";
import {theme} from "../../constants/theme";
import Video from "./Video";
import Logout from "./logout";
import Image from "./Image";
import Delete from "./Delete";
import Send from "./Send";
import Lock from './Lock';
import User from './User';
import Heart from './Heart';
import Plus from './Plus';
import Search from './Search';
import Location from './Location';
import Call from './Call';
import Camera from './Camera';
import Edit from './Edit';
import ArrowLeft from './ArrowLeft';
import ThreeDotsCircle from './ThreeDotsCircle';
import ThreeDotsHorizontal from './ThreeDotsHorizontal';
import Comment from './Comment';
import Share from './Share';
import Mail from "./Mail";

const icons = {
    home: Home,
    mail: Mail,
    lock: Lock,
    user: User,
    heart: Heart,
    plus: Plus,
    search: Search,
    location: Location,
    call: Call,
    camera: Camera,
    edit: Edit,
    arrowLeft: ArrowLeft,
    threeDotsCircle: ThreeDotsCircle,
    threeDotsHorizontal: ThreeDotsHorizontal,
    comment: Comment,
    share: Share,
    send: Send,
    delete: Delete,
    logout: Logout,
    image: Image,
    video: Video,
}

const Icon = ({name, ...props}) => {
    const IconComponent = icons[name];
  return (
   <IconComponent
    height={props.size || 24}
    width={props.size || 24}
    strokeWidth={props.strokeWidth || 1.9}
    color={theme.colors.textLight}
    {...props}
   />
  );
};

export default Icon;
