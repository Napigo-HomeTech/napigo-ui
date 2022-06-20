import '../tailwind.css';
// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};

export const decorators = [
  (Story) => (
    <html
      data-theme="dark"
      style={{
        display: 'flex',
        flexDirection: 'col',
        minHeight: '400px',
        borderRadius: '7px',
        margin: '0px',
        padding: '20px',
      }}
    >
      <Story />
    </html>
  ),
];
