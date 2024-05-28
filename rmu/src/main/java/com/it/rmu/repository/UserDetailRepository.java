package com.it.rmu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.it.rmu.entity.UserDetailEntity;

@Repository
public interface UserDetailRepository extends JpaRepository<UserDetailEntity, Integer> {

        @Query("select t from UserDetailEntity t where t.userId =?1")
        public UserDetailEntity findByUserId(Integer userId);

        @Query("delete from UserDetailEntity t where t.userId = ?1 ")
        public void deleteByUserId(Integer userId);
}