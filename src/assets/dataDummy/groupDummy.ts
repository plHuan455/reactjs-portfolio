import { SearchItemTypes } from "~molecules/SearchInput";
import { GroupTypes } from "~templates/GroupManager";
import { MemberTypes } from "~templates/MemberManager";

export const groupMemberDummy: MemberTypes[] = [
  {id: '1', email: 'email', fullName:'Pham Long Huan', joined: new Date(), permissions:'Admin'},
  {id: '2', email: 'email', fullName:'Pham Long Huan 2', joined: new Date(), permissions:'Thành viên'},
  {id: '3', email: 'email', fullName:'Pham Long Huan 3', joined: new Date(), permissions:'Thành viên'},
  {id: '4', email: 'email', fullName:'Pham Long Huan 4', joined: new Date(), permissions:'Thành viên'},
];

export const groupListDummy: GroupTypes[] = [
  {
    id: '1',
    avatarSrc: 'https://picsum.photos/300/200',
    name: 'test 1',
    slug: 'test-1',
    description: 'test',
    memberList: [{username: 'plhuan'}, {username: 'ttdthuong'}],
  },
  {
    id: '2',
    avatarSrc: 'https://picsum.photos/300/200',
    name: 'test 2',
    slug: 'test-2',
    description: 'test',
    memberList: [{username: 'plhuan'}, {username: 'ttdthuong'}],
  },
  {
    id: '3',
    avatarSrc: 'https://picsum.photos/300/200',
    name: 'test 3',
    slug: 'test-3',
    description: 'test',
    memberList: [{username: 'plhuan'}, {username: 'ttdthuong'}],
  },
  {
    id: '4',
    avatarSrc: 'https://picsum.photos/300/200',
    name: 'test 4',
    slug: 'test-4',
    description: 'test',
    memberList: [{username: 'plhuan'}, {username: 'ttdthuong'}],
  },
  {
    id: '5',
    avatarSrc: 'https://picsum.photos/300/200',
    name: 'test 5',
    slug: 'test-5',
    description: 'test',
    memberList: [{username: 'plhuan'}, {username: 'ttdthuong'}],
  },
  {
    id: '6',
    avatarSrc: 'https://picsum.photos/300/200',
    name: 'test 6',
    slug: 'test-6',
    description: 'test',
    memberList: [{username: 'plhuan'}, {username: 'ttdthuong'}],
  },
  {
    id: '7',
    avatarSrc: 'https://picsum.photos/300/200',
    name: 'test 7',
    slug: 'test-7',
    description: 'test',
    memberList: [{username: 'plhuan'}, {username: 'ttdthuong'}],
  },
  {
    id: '8',
    avatarSrc: 'https://picsum.photos/300/200',
    name: 'test 8',
    slug: 'test-8',
    description: 'test',
    memberList: [{username: 'plhuan'}, {username: 'ttdthuong'}],
  },
  {
    id: '9',
    avatarSrc: 'https://picsum.photos/300/200',
    name: 'test 9',
    slug: 'test-9',
    description: 'test',
    memberList: [{username: 'plhuan'}, {username: 'ttdthuong'}],
  },
  {
    id: '10',
    avatarSrc: 'https://picsum.photos/300/200',
    name: 'test 10',
    slug: 'test-10',
    description: 'test',
    memberList: [{username: 'plhuan'}],
  },
  {
    id: '11',
    avatarSrc: 'https://picsum.photos/300/200',
    name: 'test 11',
    slug: 'test-11',
    description: 'test',
    memberList: [{username: 'plhuan'}],
  },
  {
    id: '12',
    avatarSrc: 'https://picsum.photos/300/200',
    name: 'test 12',
    slug: 'test-2',
    description: 'test',
    memberList: [{username: 'plhuan'}],
  },
  {
    id: '13',
    avatarSrc: 'https://picsum.photos/300/200',
    name: 'test 13',
    slug: 'test-13',
    description: 'test',
    memberList: [{username: 'plhuan'}],
  },
  {
    id: '14',
    avatarSrc: 'https://picsum.photos/300/200',
    name: 'test 14',
    slug: 'test-14',
    description: 'test',
    memberList: [{username: 'plhuan'}],
  },
]

export const searchListDummy: SearchItemTypes[] = [
  {
    title: 'test 1',
    description: 'description 1',
    avatarSrc: 'https://picsum.photos/300/200'
  },
  {
    title: 'test 2',
    description: 'description 2',
    avatarSrc: 'https://picsum.photos/300/201'
  },
  {
    title: 'test 2',
    description: 'description 2',
    avatarSrc: 'https://picsum.photos/300/201'
  },
  {
    title: 'test 2',
    description: 'description 2',
    avatarSrc: 'https://picsum.photos/300/201'
  },
  {
    title: 'test 2',
    description: 'description 2',
    avatarSrc: 'https://picsum.photos/300/201'
  },
  {
    title: 'test 2',
    description: 'description 2',
    avatarSrc: 'https://picsum.photos/300/201'
  },
]