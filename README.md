# ScriptMaker
Create a script. Wrap cell numbers in the entered code.
Enter cell list, enter comand with word CELL_NAME instead cell. Push 'make script'.

                                                 comand1 cell= cell_1;
                                                 comand2 cell= cell_1;
                                                 comand3 cell= cell_1;
cell_1           comand1 cell= CELL_NAME;        comand1 cell= cell_2;
cell_2     =>    comand2 cell= CELL_NAME;    =>  comand2 cell= cell_2;
cell_3           comand3 cell= CELL_NAME;        comand3 cell= cell_2;
                                                 comand1 cell= cell_3;
                                                 comand2 cell= cell_3;
                                                 comand3 cell= cell_3;
