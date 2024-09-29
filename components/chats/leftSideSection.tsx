import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import Link from "next/link";
import Image from "next/image";
export default function LeftSideSection({
  setIsFriendListOpen,
  isFriendListOpen,
}: boolean) {
  return (
    <aside>
      <div className="bg-primary-foreground w-64 h-screen">
        <div className="flex justify-center">
          <Input
            className="w-[224px] h-8 mt-3"
            placeholder="Find or start a conversation "
          />
        </div>
        <hr className="w-full h-[1.5px] bg-secondary-foreground opacity-25 mt-2" />
        <div>
          <ScrollArea>
            <button
              onClick={() => setIsFriendListOpen(true)}
              className={`w-[224px] h-8 mt-3 text-foreground hover:bg-background data-[active=true]:bg-background rounded-[0.75rem] py-5 items-center flex justify-center mx-4`}
              data-active={isFriendListOpen}
            >
              <div className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>{" "}
                <span className="ml-2">Friends</span>
              </div>
            </button>
            <div className="flex flex-row ml-2 items-center mt-4">
              <p className="select-none text-sm opacity-70">Direct Messages</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-28 opacity-70 mt-2"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
            {/* Conversations */}
            <div className="m-4 space-y-1">
              {/* User */}
              <div>
                <Link href="/chats/:userID">
                  <ContextMenu>
                    <ContextMenuTrigger>
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <div
                            className="flex flex-row space-x-4 hover:bg-background px-4 py-2 rounded-[0.75rem] data-[active=true]:bg-background w-56"
                            data-active="true"
                          >
                            <div className="relative inline-block">
                              <Avatar className="w-9 h-9">
                                <AvatarImage
                                  src="/img/AbuJamal-avatar.jpg"
                                  alt="avatar"
                                />

                                <AvatarFallback>
                                  <Image
                                    src="/img/AbuJamal-Avatar.jpg"
                                    width={40}
                                    height={40}
                                    alt="@username"
                                  />
                                </AvatarFallback>
                              </Avatar>
                              <div
                                className="absolute -bottom-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-green-600 data-[status=offline]:bg-gray-500"
                                data-status="offline"
                              >
                                <div
                                  className="data-[status=offline]:h-1.5 data-[status=offline]:w-1.5 rounded-full bg-background"
                                  data-status="offline"
                                />
                              </div>
                            </div>
                            <span className="mt-2 select-none text-sm">
                              Username
                            </span>
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-[280px]">
                          <div className="flex justify-between space-x-4">
                            <Avatar>
                              <AvatarImage src="/img/AbuJamal-Avatar.jpg" />
                              <AvatarFallback>A</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold">
                                @username
                              </h4>
                              <p className="text-sm">
                                An Fullstack Web Developer.
                              </p>
                              <div className="flex items-center pt-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="mr-2 h-4 w-4 opacity-70"
                                >
                                  <rect
                                    x="3"
                                    y="4"
                                    width="18"
                                    height="18"
                                    rx="2"
                                    ry="2"
                                  ></rect>
                                  <line x1="16" y1="2" x2="16" y2="6"></line>
                                  <line x1="8" y1="2" x2="8" y2="6"></line>
                                  <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                                <span className="text-xs text-muted-foreground">
                                  Joined 26 Sep 2024
                                </span>
                              </div>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </ContextMenuTrigger>
                    <ContextMenuContent>
                      <ContextMenuItem>Profile</ContextMenuItem>
                      <ContextMenuItem>Voice Call</ContextMenuItem>
                      <ContextMenuItem disabled>
                        <hr className="w-full h-[1.5px] bg-secondary-foreground opacity-15" />
                      </ContextMenuItem>
                      <ContextMenuItem>Remove Friend</ContextMenuItem>
                      <ContextMenuItem className="text-red-600">
                        Block
                      </ContextMenuItem>
                      <ContextMenuItem disabled>
                        <hr className="w-full h-[1.5px] bg-secondary-foreground" />
                      </ContextMenuItem>
                      <ContextMenuItem>Copy ID</ContextMenuItem>
                    </ContextMenuContent>
                  </ContextMenu>
                </Link>
              </div>
              <div>
                <Link href="/chats/:userID">
                  <ContextMenu>
                    <ContextMenuTrigger>
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <div
                            className="flex flex-row space-x-4 hover:bg-background px-4 py-2 rounded-[0.75rem] data-[active=true]:bg-background w-56"
                            data-active="false"
                          >
                            <div className="relative inline-block">
                              <Avatar className="w-9 h-9">
                                <AvatarImage
                                  src="/img/AbuJamal-avatar.jpg"
                                  alt="avatar"
                                />

                                <AvatarFallback>
                                  <Image
                                    src="/img/AbuJamal-Avatar.jpg"
                                    width={40}
                                    height={40}
                                    alt="@username"
                                  />
                                </AvatarFallback>
                              </Avatar>
                              <div
                                className="absolute -bottom-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-green-600 data-[status=offline]:bg-gray-500"
                                data-status="online"
                              >
                                <div
                                  className="data-[status=offline]:h-1.5 data-[status=offline]:w-1.5 rounded-full bg-background"
                                  data-status="online"
                                />
                              </div>
                            </div>
                            <span className="mt-2 select-none text-sm">
                              Username
                            </span>
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-[280px]">
                          <div className="flex justify-between space-x-4">
                            <div className="relative inline-block">
                              <Avatar>
                                <AvatarImage
                                  src="/img/AbuJamal-avatar.jpg"
                                  alt="avatar"
                                />

                                <AvatarFallback>
                                  <Image
                                    src="/img/AbuJamal-Avatar.jpg"
                                    width={40}
                                    height={40}
                                    alt="@username"
                                  />
                                </AvatarFallback>
                              </Avatar>
                              <div
                                className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-600 data-[status=offline]:bg-gray-500"
                                data-status="offline"
                              >
                                <div
                                  className="data-[status=offline]:h-2 data-[status=offline]:w-2 rounded-full bg-background"
                                  data-status="offline"
                                />
                              </div>
                            </div>
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold">
                                @username
                              </h4>
                              <p className="text-sm">
                                The Owner of Hardware Zone Youtube Channel
                              </p>
                              <div className="flex items-center pt-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="mr-2 h-4 w-4 opacity-70"
                                >
                                  <rect
                                    x="3"
                                    y="4"
                                    width="18"
                                    height="18"
                                    rx="2"
                                    ry="2"
                                  ></rect>
                                  <line x1="16" y1="2" x2="16" y2="6"></line>
                                  <line x1="8" y1="2" x2="8" y2="6"></line>
                                  <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                                <span className="text-xs text-muted-foreground">
                                  Joined 25 Sep 2023
                                </span>
                              </div>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </ContextMenuTrigger>
                    <ContextMenuContent>
                      <ContextMenuItem>Profile</ContextMenuItem>
                      <ContextMenuItem>Voice Call</ContextMenuItem>
                      <ContextMenuItem disabled>
                        <hr className="w-full h-[1.5px] bg-secondary-foreground opacity-15" />
                      </ContextMenuItem>
                      <ContextMenuItem>Add Friend</ContextMenuItem>
                      <ContextMenuItem className="text-red-600">
                        Block
                      </ContextMenuItem>
                      <ContextMenuItem disabled>
                        <hr className="w-full h-[1.5px] bg-secondary-foreground" />
                      </ContextMenuItem>
                      <ContextMenuItem>Copy ID</ContextMenuItem>
                    </ContextMenuContent>
                  </ContextMenu>
                </Link>
              </div>
            </div>
          </ScrollArea>
        </div>
        <div className="bg-background w-64 h-[54px] bottom-0 fixed select-none">
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-row space-x-3">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="flex flex-row space-x-3 hover:bg-secondary px-2 py-1 rounded-[0.75rem]">
                    <div className="relative inline-block">
                      <Avatar className="w-9 h-9">
                        <AvatarImage
                          src="/img/AbuJamal-avatar.jpg"
                          alt="avatar"
                        />

                        <AvatarFallback>
                          <Image
                            src="/img/AbuJamal-Avatar.jpg"
                            width={40}
                            height={40}
                            alt="@username"
                          />
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className="absolute -bottom-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-green-600 data-[status=offline]:bg-gray-500"
                        data-status="online"
                      >
                        <div
                          className="data-[status=offline]:h-1.5 data-[status=offline]:w-1.5 rounded-full bg-background"
                          data-status="online"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm select-text">Username</span>
                      <span className="text-xs text-muted-foreground">
                        Online
                      </span>
                    </div>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[224px]">
                  <DropdownMenuLabel>Set Status</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <div className="mr-2 flex h-3 w-3 items-center justify-center rounded-full bg-green-600">
                      <div className="rounded-full" />
                    </div>
                    Online
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    {" "}
                    <div className="mr-2 flex h-3 w-3 items-center justify-center rounded-full bg-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-background" />
                    </div>
                    Invisible
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="flex flex-row mt-1 ">
                <div className="hover:bg-secondary px-2 py-2 rounded-[0.75rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" y1="19" x2="12" y2="23"></line>
                    <line x1="8" y1="23" x2="16" y2="23"></line>
                  </svg>
                </div>
                <div className="hover:bg-secondary px-2 py-2 rounded-[0.75rem]">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    width="21"
                    height="21"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    className="-mt-[2px]"
                  >
                    <path d="M4 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z"></path>
                    <path d="M15 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z"></path>
                    <path d="M4 15v-3a8 8 0 0 1 16 0v3"></path>
                  </svg>
                </div>
                <div className="hover:bg-secondary px-2 py-2 rounded-[0.75rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
