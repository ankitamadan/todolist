package com.flexdapps.todolist.model;

import java.math.BigInteger;

public class Item {

    private String name;
    private BigInteger id;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigInteger getId() {
        return id;
    }

    public void setId(BigInteger id) {
        this.id = id;
    }
}
