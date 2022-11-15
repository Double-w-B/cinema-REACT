import styled from "styled-components";
import { ComingSoonSlider, Container } from "./ComingSoonSlider.style";
import { NowPlaying } from "./NowPlaying.style";
import { NowPlayingSlider, ImgContainer } from "./NowPlayingSlider.style";

const StyledHomePage = styled.main``;

StyledHomePage.NowPlayingSlider = NowPlayingSlider;
StyledHomePage.NowPlayingSlider.ImgContainer = ImgContainer;
StyledHomePage.NowPlaying = NowPlaying;
StyledHomePage.ComingSoonSlider = ComingSoonSlider;
StyledHomePage.ComingSoonSlider.Container = Container;

export default StyledHomePage;
