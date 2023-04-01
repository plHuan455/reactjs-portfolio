import MainLayout from '../../components/templates/MainLayout';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { RiTestTubeFill } from 'react-icons/ri';
import { renderPageUrl } from '../../navigation'; 
import { useMemo, useState } from 'react';
import useMatchMedia from '~hooks/useMatchMedia';
import useDebounce from '~hooks/useDebounce';
import { searchListDummy } from '~assets/dataDummy/groupDummy';
import { SearchItemTypes } from '~molecules/SearchInput';
import { MdOutlineGroup } from 'react-icons/md';
import { BsCalendar3 } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../../store';
import { useQuery } from '@tanstack/react-query';
import { getGroupsService } from '~services/group';
import { setCurrentGroup } from '../../store/system';
import { toast } from 'react-toastify';

export interface MainLayoutContainerProps {
  children: JSX.Element;
}

export default function MainLayoutContainer({ children }: MainLayoutContainerProps) {

  return (
    <MainLayout
    >
      {children}
    </MainLayout>
  );
}
