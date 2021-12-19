import React, { FunctionComponent, useEffect, useState } from "react";
import { Alert, ImageSourcePropType, Linking } from "react-native";
import { useNavigation } from "@react-navigation/core";

import { Container } from "./styles";
import { OAuth2Payload } from "../../core/services";
import { SuggestionsNavigationProp } from "../../routes";

import {
  ApiResponse,
  AuthorizeResponse,
  CampusResponse,
  useAuthorize,
  useCampusWithCourses,
  useGlobal,
  useGoogleAuth,
  useIsSessionActive,
  useSession,
} from "../../core/hooks";

import {
  AssetRobotKindIcon,
  AssetRobotQuestionsIcon,
  AssetRobotSmileDownIcon,
  AssetRobotSmileIcon
} from "../../assets";

import {
  Avatar,
  ButtonGoogle,
  ButtonStep,
  Carousel,
  PageLayout,
  Paragraph,
  Render,
  Spacer,
  Title
} from "../../core/components";

export interface WelcomeProps { }

export const Welcome: FunctionComponent<WelcomeProps> = () => {
  const navigation = useNavigation<SuggestionsNavigationProp>();

  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const [doLogin] = useGoogleAuth({ onResponse: onGoogleResponse });
  const [authorization,, authorize] = useAuthorize(onAuthorizeResponse);
  const [global, setGlobal] = useGlobal();
  const [session, setSession] = useSession();
  const isSessionActive = useIsSessionActive();

  const [,,getCourses] = useCampusWithCourses((success: boolean, response: ApiResponse<CampusResponse>) => {
    if (success){
      setGlobal({...global, data: response.data.response});
      setShowSuggestions(true);
    } else {
      onResponseError(response.data.code);
    }
    setTimeout(() => setIsLoading(false), 1000);
  });
  
  useEffect(() => {
    if (isSessionActive){
      getCourses();
      setIsLoading(true);
    }
    setTimeout(() => {
      if (!isSessionActive) setIsLoading(false)
    }, 8000);
  }, [isSessionActive]);

  useEffect(() => {
    if (showSuggestions) 
      navigation.navigate("Suggestions");
  }, [showSuggestions]);

  function onAuthorizeResponse(success: boolean, response: ApiResponse<AuthorizeResponse>) {
    if (success && !authorization?.data.error){
      getCourses();
    } else 
    if (!success){
      onResponseError(response.data.code);
    }
  }

  function onGoogleResponse(user: OAuth2Payload | undefined, isAuthenticated: boolean){
    if (isAuthenticated){
      authorize(String(user?.idToken));
      setSession({...session, user: user?.user});
    } else {
      Alert.alert(
        "Erro ao acessar conta Google", 
        "Não foi possível acessar sua conta Google, " + 
        "você cancelou o procedimento? Tente novamente.");
    }
    setIsLoading(false);
  }

  function onGoogleButtonClick(){
    setIsLoading(true);
    doLogin();
  }

  function onBackPressed() {
    if (step > 0)
      setStep(step-1);
    return true;
  }

  function onResponseError(code: string) {
    switch (code) {
      case 'status_outdated_version_exception': {
        Alert.alert(
          "Parece que sua versão está muito desatualizada!",
          "Verificamos a versão do Seja UPE instalada neste aparelho e " +
          "constatamos que ela já está muito desatualizada! Você gostaria " + 
          "de atualizar seu aplicativo agora?",
          [
            { text: "Não, obrigado", style: "cancel" },
            { text: "Sim, por favor", onPress: () => Linking.openURL("market://details?id=com.sejaupe.app") }
          ]);
        setSession({}); //Limpa o cache do aplicativo
        break;
      }
      default: {
        Alert.alert(
          "Oops, estamos passando por problemas!",
          "Parece que não conseguimos obter a lista mais recente dos cursos da UPE. " +
          "Desculpe-nos pelo inconveniente, mas é possível que o aplicativo esteja em " +
          "manutenção ou você esteja desconectado da Internet. Tente novamente em alguns minutos.");
      }
    }
  }

  function getRobotIcon(): ImageSourcePropType {
    return [
      AssetRobotSmileDownIcon,
      AssetRobotKindIcon,
      AssetRobotSmileDownIcon,
      AssetRobotQuestionsIcon
    ][step] ?? AssetRobotSmileIcon;
  }

  return (
    <PageLayout 
      showHeader
      showSpinner={isLoading}
      canGoBack
      onBackPressed={onBackPressed}
    >
      <Container>
        <Spacer verticalSpace={16} />

        <Avatar
          source={getRobotIcon()}
          diameter={256}
          padding={16}
        />

        <Spacer verticalSpace={16} />

        <Render if={step == 0}>
          <Title align="center">BEM-VINDO(A)! 😄</Title>
        </Render>

        <Render if={step == 1}>
          <Title align="center">VOCÊ É QUEM DECIDE</Title>
        </Render>

        <Render if={step == 2}>
          <Title align="center">QUERO AJUDAR VOCÊ</Title>
        </Render>

        <Render if={step == 3}>
          <Title align="center">DEIXE-ME CONHECÊ-LO MELHOR</Title>
        </Render>

        <Render if={step == 4}>
          <Title align="center">VAMOS COMEÇAR?</Title>
        </Render>

        <Spacer verticalSpace={8} />

        <Render if={step == 0}>
          <Paragraph justify>
            Eu sou o D-Ritchie, daqui pra frente vou  ajudar você a decidir seu tão sonhado 
            curso ❤️!
          </Paragraph>
        </Render>

        <Render if={step == 1}>
          <Paragraph justify>
            Nosso objetivo não é decidir o curso por você, mas fornecer informações que te 
            possibilitem identificar seus pontos fortes.
          </Paragraph>
        </Render>

        <Render if={step == 2}>
          <Paragraph justify>
            Quero ajudá-lo a encontrar o curso que você melhor se identifica. Na UPE, temos 
            vários cursos que podem se adequar a ao seu gosto e provavelmente você se encaixa 
            em algum deles...
          </Paragraph>
        </Render>

        <Render if={step == 3}>
          <Paragraph justify>
            Mas antes precisarei realizar algumas perguntas para te ajudar! Suas escolhas dizem 
            muito sobre você, então pense bem antes de fornecer suas respostas...
          </Paragraph>
        </Render>

        <Render if={step == 4}>
          <Paragraph justify>
            Vamos começar vendo quais são as suas áreas de interesse, o que você não gosta e ao 
            final farei algumas perguntas relacionadas ao seu tempo!
          </Paragraph>
        </Render>

        <Spacer verticalSpace={16} />

        <Render if={step < 4}>
          <Carousel 
            length={4} 
            currentIndex={step} 
          />
          <Spacer verticalSpace={32} />
          <ButtonStep text="Continuar" onPress={() => setStep(step+1)}/>
        </Render>

        <Render if={step == 4}>
          <Spacer verticalSpace={24} />
          <ButtonGoogle onPress={onGoogleButtonClick} text="Entrar com Google" />
        </Render>

      </Container>
    </PageLayout>
  );
}