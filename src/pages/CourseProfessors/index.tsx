import { RouteProp, useNavigation, useRoute } from "@react-navigation/core";
import React, { Fragment, FunctionComponent, useState } from "react";

import { RobotContainer } from "./styles";

import {
  Avatar,
  CardBaloon,
  CardProfessor,
  PageLayout,
  Paragraph,
  Spacer,
  TitleOutline
} from "../../core/components";

import { CourseProfessorNavigationProp, RoutesParamList } from "../../routes";
import { AssetProfessorPhotoIcon, AssetRobotKindIcon, AssetWidgetProfessorsIcon } from "../../assets";
import { Professor, useCourseProfessors, useEnterScreen, useLeaveScreen } from "../../core/hooks";
import { Alert } from "react-native";

export interface CourseProfessorsProps { }

export const CourseProfessors: FunctionComponent<CourseProfessorsProps> = () => {
  const route = useRoute<RouteProp<RoutesParamList, "CourseProfessors">>();
  const navigation = useNavigation<CourseProfessorNavigationProp>();
  
  const [isLoading, setIsLoading] = useState(true);

  const [professors, success, getProfessors] = useCourseProfessors(() => {
    setIsLoading(false);
    if (!success){
      Alert.alert(
        "Oops, não foi possível exibir os professores.", 
        "Parece que não conseguimos obter os professores " + 
        "deste curso no momento. Verifique se você possui " + 
        "acesso à Internet e tente novamente em alguns instantes."
      );
    }
  });

  useEnterScreen(() => {
    getProfessors(route.params.id);
  });

  useLeaveScreen(() => {
    setIsLoading(true);
  });

  function onDetailClick(professor: Professor){
    navigation.navigate("CourseProfessor", professor);
  }

  return (
    <PageLayout 
      showHeader
      showSpinner={isLoading}
      canGoBack
    >
      <TitleOutline title="Corpo docente" icon={AssetWidgetProfessorsIcon} />
      <Spacer verticalSpace={32} />

      <RobotContainer>

        <Avatar source={AssetRobotKindIcon} diameter={80} padding={16} />
        <CardBaloon direction="left">
          <Paragraph paddingLeft="16px" paddingRight="16px" paddingTop="16px" paddingBottom="16px" justify>
            {"Atualmente no curso de " + route.params.name + ", possuímos " + professors?.data.response.length + " professores."}
          </Paragraph>
        </CardBaloon>

      </RobotContainer>
      <Spacer verticalSpace={32} />

      <TitleOutline title="Docentes do curso" bold={false} />
      <Spacer verticalSpace={32} />

      {professors?.data.response.map((professor: Professor) => (
        <Fragment key={String(professor.id)}>
          <CardProfessor 
            key={String(professor.id)}
            name={professor.name} 
            photo={!!professor.photoUrl ? { uri: professor.photoUrl } : AssetProfessorPhotoIcon} 
            shortbio={professor.shortbio} 
            areas={professor.areas}
            onPress={() => onDetailClick(professor)} 
          />
          <Spacer verticalSpace={16} />
        </Fragment>
      ))}

    </PageLayout>
  );
}
