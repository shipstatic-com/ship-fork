import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'CLI Layer',
      items: ['cli-layer/overview', 'cli-layer/commands'],
    },
    {
      type: 'category',
      label: 'SDK Layer',
      items: ['sdk-layer/overview', 'sdk-layer/getting-started', 'sdk-layer/resources', 'sdk-layer/error-handling', 'sdk-layer/types'],
    },
    {
      type: 'category',
      label: 'REST API Layer',
      items: ['api-layer/overview', 'api-layer/authentication', 'api-layer/endpoints'],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
