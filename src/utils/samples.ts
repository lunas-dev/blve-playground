import { ref } from 'vue'

export type SampleItem = {
  name: string
  files: {
    onlinePath: string
    filename: string
  }[]
}

export const sampleItems = ref<SampleItem[]>([
  {
    name: 'Data Binding',
    files: [{ onlinePath: '0.blv', filename: 'App' }]
  },
  {
    name: 'Data Binding with Style',
    files: [{ onlinePath: '6.blv', filename: 'App' }]
  },
  {
    name: 'Incrementer by Dynamic Data Binding',
    files: [{ onlinePath: '0.blv', filename: 'App' }]
  },
  {
    name: 'Stopwatch',
    files: [{ onlinePath: '1.blv', filename: 'App' }]
  },
  {
    name: 'Style Attribute Binding',
    files: [{ onlinePath: '2.blv', filename: 'App' }]
  },
  {
    name: 'Value Attribute Binding',
    files: [{ onlinePath: '3.blv', filename: 'App' }]
  },
  {
    name: 'Two-way Data Binding 1',
    files: [{ onlinePath: '4.blv', filename: 'App' }]
  },
  {
    name: 'Two-way Data Binding 2',
    files: [{ onlinePath: '5.blv', filename: 'App' }]
  },
  {
    name: 'If Block 1',
    files: [{ onlinePath: '7.blv', filename: 'App' }]
  },
  {
    name: 'If Block 2',
    files: [{ onlinePath: '8.blv', filename: 'App' }]
  },
  {
    name: 'If Block 3',
    files: [{ onlinePath: '11.blv', filename: 'App' }]
  },
  {
    name: 'If Block 4',
    files: [{ onlinePath: '12.blv', filename: 'App' }]
  },
  {
    name: 'Child Component',
    files: [
      { onlinePath: '18.blv', filename: 'App' },
      { onlinePath: '19.blv', filename: 'Child' }
    ]
  }
])
