import React, { FunctionComponent, useRef, useState } from 'react';
import { Modal } from 'react-native';

import { Render } from '../Render';
import { Spacer } from '../Spacer';
import { useTheme } from '../../hooks';
import { AssetRobotSmileDownIcon } from '../../../assets';

import {
  ButtonsRow,
  Clickable,
  Dislike,
  Horizontal,
  Like,
  ModalContainer,
  RobotBanner,
  RobotText,
  Vertical,
  ViewContainer
} from './styles';

export interface ModalEvaluationProps {
  type: 'rating' | 'popularity';
  isOpen: boolean;
  onResult: (e: number | 'like' | 'dislike') => void;
}

export const ModalEvaluation: FunctionComponent<ModalEvaluationProps> = ({ type, isOpen, onResult }) => {
  const [theme] = useTheme();
  const [isOpenModal, setOpenModal] = useState(isOpen);
  const [popularity, setPopularity] = useState<'none' | 'like' | 'dislike'>('none');

  const isDone = useRef(false);

  function onPopularityChoosed(result: 'like' | 'dislike'){
    if (!isDone.current){
      isDone.current = true;
      setPopularity(result);
      onResult(result);
      setTimeout(() => setOpenModal(false), 1000);
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpenModal}
    >
      <ModalContainer activeOpacity={1}>
        <ViewContainer {...theme}>

          <Render if={type == 'popularity'}>
            <Vertical>

              <RobotBanner 
                {...theme} 
                resizeMode="contain" 
                source={AssetRobotSmileDownIcon} 
              />
              <Spacer verticalSpace={18} />

              <RobotText {...theme}>Avalie o Curso!</RobotText>
              <Spacer verticalSpace={18} />

              <ButtonsRow>
                <Horizontal>

                  <Clickable onPress={() => onPopularityChoosed('like')} activeOpacity={0.7}>
                    <Like 
                      name="like1" 
                      size={48} 
                      color={popularity == 'like' ? theme.blue : theme.evaluationColor} 
                    />
                  </Clickable>

                  <Clickable onPress={() => onPopularityChoosed('dislike')} activeOpacity={0.7}>
                    <Dislike
                      name="dislike1"
                      size={48}
                      color={popularity == 'dislike' ? theme.blue : theme.evaluationColor}
                      style={{
                        transform: [
                          { rotateX: '180deg' }, //Horizontal
                          { scaleX: -1 }, //Horizontal
                          { scaleY: -1 } //Vertical
                        ]
                      }}
                    />
                  </Clickable>

                </Horizontal>
              </ButtonsRow>

            </Vertical>
          </Render>

          <Render if={type == 'rating'}>
            {/* Not implemented yet */}
          </Render>

        </ViewContainer>
      </ModalContainer>
    </Modal>
  );
}
