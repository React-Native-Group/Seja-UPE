import React, { FunctionComponent } from 'react';
import { Accordion, Messages, PageLayout, Spacer, TitleOutline, ToggleGroup } from '../../core/components';

export interface TestsProps { }

export const Tests: FunctionComponent<TestsProps> = () => {

  const messages = [
    {
      isOwner: true, 
      text: 'Teste de balão de fala...', 
      photo: null, 
      username: null
    },
    {
      isOwner: false, 
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis, elit vel accumsan suscipit, quam turpis condimentum nisl, a laoreet nisl leo id arcu. Nunc bibendum interdum mi, scelerisque egestas turpis bibendum ac.!', 
      photo: 'https://images.generated.photos/w2glHM0lPCc6uEctJ6U4Rhve6JqNOJjFXfXw3yerOIo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvZGU0NTEy/ZWQtYzE3MS00ZmVm/LTkxODMtNmI2ZGIy/YTJhMjAxLmpwZw.jpg', 
      username: 'Sofia Oliveira'
    },
    {
      isOwner: true, 
      text: 'Teste de balão de fala...', 
      photo: null, 
      username: null
    },
    {
      isOwner: false, 
      text: 'Olá!', 
      photo: 'https://images.generated.photos/w2glHM0lPCc6uEctJ6U4Rhve6JqNOJjFXfXw3yerOIo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvZGU0NTEy/ZWQtYzE3MS00ZmVm/LTkxODMtNmI2ZGIy/YTJhMjAxLmpwZw.jpg', 
      username: 'Sofia Oliveira'
    },
    {
      isOwner: true, 
      text: 'Teste de balão de fala...', 
      photo: null, 
      username: null
    },
    {
      isOwner: false, 
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis, elit vel accumsan suscipit, quam turpis condimentum nisl, a laoreet nisl leo id arcu. Nunc bibendum interdum mi, scelerisque egestas turpis bibendum ac.!', 
      photo: 'https://images.generated.photos/w2glHM0lPCc6uEctJ6U4Rhve6JqNOJjFXfXw3yerOIo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvZGU0NTEy/ZWQtYzE3MS00ZmVm/LTkxODMtNmI2ZGIy/YTJhMjAxLmpwZw.jpg', 
      username: 'Sofia Oliveira'
    },
    {
      isOwner: true, 
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis, elit vel accumsan suscipit, quam turpis condimentum nisl, a laoreet nisl leo id arcu. Nunc bibendum interdum mi, scelerisque egestas turpis bibendum ac.', 
      photo: null, 
      username: null
    },
    {
      isOwner: false, 
      text: 'Olá!', 
      photo: 'https://images.generated.photos/w2glHM0lPCc6uEctJ6U4Rhve6JqNOJjFXfXw3yerOIo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvZGU0NTEy/ZWQtYzE3MS00ZmVm/LTkxODMtNmI2ZGIy/YTJhMjAxLmpwZw.jpg', 
      username: 'Sofia Oliveira'
    }
  ]

  return (
    <PageLayout 
      showFab
      showHeader
      showTabs 
      canScroll
      canGoBack
      onTabClick={console.log}
    >
      <TitleOutline title="Teste de sanfona" />
      <Spacer verticalSpace={10} />

      <Accordion title="Sobre o Curso" body="Corpo do texto" />
      <Spacer verticalSpace={10} />

      <ToggleGroup onChange={console.log} />

      <Messages messages={messages} />

    </PageLayout>
  );
}