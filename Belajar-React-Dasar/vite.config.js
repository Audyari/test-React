import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions:{
      input: {
        index: "index.html",
        hello_world: "Hello-World.html",
        hello_world_doble_d: "Hello-Worldd.html",
        contact: "contact.html",
        task: "task.html",
        componenn: "componenn.html",
        javascript_di_jsx: "JavaScriptdiJSX.html",
        props: "Props.html",
        nested_component: "NestedComponent.html",
        style: "Style.html",
        conditional: "Conditional.html",
        collection_component: "CollectionComponent.html",
        pure_component: "PureComponent.html",
        event_handler: "EventHandler.html",
        event_object: "EventObject.html",
        event_propagation: "EventPropagation.html",
        side_effect: "SideEffect.html",
        state: "State.html",
        snapshot: "Snapshot.html",
        state_updates: "StateUpdates.html",
        object_di_state: "ObjectdiState.html",
        array_di_state: "ArraydiState.html",
        sharing_state: "SharingState.html",
        mempertahankan_state: "MempertahankanState.html",
        reset_state: "ResetState.html",
        reducer: "Reducer.html"
      }
    }
  }
})
