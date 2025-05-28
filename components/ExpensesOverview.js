// components/ExpensesOverview.js
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import recentExpenses from "../screen/recentExpenses";
import allExpenses from "../screen/allExpenses";
import managerExpenses from "../screen/manageExpenses";
import { Ionicons } from "@expo/vector-icons";

const BottomTabs = createBottomTabNavigator();

export default function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "blue" },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: "blue" },
        tabBarActiveTintColor: "white"
      }}
    >
      <BottomTabs.Screen
        name="ManageExpense"
        component={managerExpenses}
        options={{
          title: "Manager Expense",
          tabBarLabel: "Edit",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='create' size={size} color={color} />
          )
        }}
      />
      <BottomTabs.Screen
        name="RecentExpenses"
        component={recentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='hourglass' size={size} color={color} />
          )
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={allExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calendar' size={size} color={color} />
          )
        }}
      />
    </BottomTabs.Navigator>
  );
}