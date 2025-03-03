# halka-ui-native

A collection of customizable React Native components using **Tailwind CSS** and **React Native Reanimated**.  
This package includes a **Button, Accordion, Progress Bar, and Circular Progress**.

## 🚀 Important

Please configure Nativewind and Tailwind CSS before installing the package.

## 🚀 Installation

First, install the package via npm or yarn:

```sh
npm install halka-ui-native
# or
yarn add halka-ui-native

```
## 🚀 Dependencies

This package requires:

```sh
react (>= 18.0.0)
react-native (>= 0.70.0)
nativewind (>= 2.0.11)
tailwindcss (>= 3.3.2)
```
## 📌 Usage

Importing Components
Once installed, you can easily import and use the components in your project.

```sh
import React from "react";
import { View } from "react-native";
import { Button, Accordion, ProgressBar, CircularProgress } from "halka-ui-native";
import Icon from 'react-native-vector-icons/IonIcons'

const App = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Button
          text="Logout"
          size="small"
          variant="danger"
          icon={<Icon name="power-outline" size={30} color="#FFF" />}
          onPress={() => logout()}
        />
      <Accordion />
      <ProgressBar />
      <CircularProgress />
    </View>
  );
};

export default App;

```

