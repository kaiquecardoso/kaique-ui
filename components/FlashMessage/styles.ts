import { Dimensions, StyleSheet } from "react-native";
import { DYNAMIC_ISLAND_CONFIG } from "./constants";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    zIndex: 1000,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  dynamicIslandContainer: {
    position: "absolute",
    top: 12,
    left: "50%",
    zIndex: 1000,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  dynamicIslandContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  iconContainer: {
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 18,
    fontWeight: "bold",
  },
  messageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  dynamicIslandRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: DYNAMIC_ISLAND_CONFIG.paddingHorizontal,
    gap: DYNAMIC_ISLAND_CONFIG.gap,
  },
});
